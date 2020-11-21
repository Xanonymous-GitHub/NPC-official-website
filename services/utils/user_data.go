package utils

import (
	"cloud.google.com/go/firestore"
	. "context"
	"encoding/json"
	"errors"
	firebase "firebase.google.com/go/v4"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
	"sync"
)

// use firebase uid to get data from firestore and return its user data(snapshot) and role.
func FindUserDocumentSnapshotAndRole(uid string, ctx Context, app *firebase.App) (*firestore.DocumentSnapshot, Role, error) {
	// initialized result.
	result := &firestore.DocumentSnapshot{}

	// false = uid not in firestore.
	founded := false

	// default user role.
	myRole := UNKNOWN

	// initialized a wait-group for parallel finding process.
	var wg sync.WaitGroup

	// init firestore instance.
	client, err := app.Firestore(ctx)
	if err != nil {
		return result, myRole, err
	}

	// each role has its own firestore collection, and declared in models.
	for _, role := range RoleList {
		wg.Add(1) // add a wait-group flag to each process.
		// open a new go concurrency function for this role.
		go func(wg *sync.WaitGroup, role Role) {
			// try to get the source userdata from firestore.
			snap, err := client.Collection(string(role)).Doc(uid).Get(ctx)

			// if userdata not inside firestore, unmark wait-group flag and close this concurrency.
			if err != nil || len(snap.Data()) == 0 {
				wg.Done()
				return
			}

			// save the founded document snapshot.
			result = snap

			// mark as found.
			founded = true

			// because snapshot found in this collection, so the user's role is the collection name.
			myRole = role

			// unmark wait-group flag
			wg.Done()
			return
		}(&wg, role)
	}

	// wait until all wait-group is all unmarked.
	wg.Wait()

	// handle result.
	if !founded {
		return result, myRole, errors.New("user doc not found")
	}
	return result, myRole, nil
}

// convert the origin userdata snapshot to User instance.
func ParseUserData(snapshot *firestore.DocumentSnapshot) (User, error) {
	// initialized result.
	result := &User{}

	// serialized the source.
	jsonString, err := json.Marshal(snapshot.Data())
	if err != nil {
		return *result, err
	}

	// un-serialized source.
	err = json.Unmarshal(jsonString, &result)
	if err != nil {
		return *result, err
	}

	return *result, nil
}

// use uid to directly get parsed user data instance.
func GetUserData(uid string, ctx Context, app *firebase.App) (User, error) {
	// get source snapshot.
	snapshot, _, err := FindUserDocumentSnapshotAndRole(uid, ctx, app)
	if err != nil {
		return User{}, err
	}

	// convert to new instance and get it.
	result, err := ParseUserData(snapshot)
	if err != nil {
		return User{}, err
	}

	return result, nil
}
