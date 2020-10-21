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

func FindUserDocumentSnapshotAndRole(uid string, ctx Context, app *firebase.App) (*firestore.DocumentSnapshot, Role, error) {
	result := &firestore.DocumentSnapshot{}
	founded := false
	myRole := UNKNOWN
	var wg sync.WaitGroup

	// init firestore instance.
	client, err := app.Firestore(ctx)
	if err != nil {
		return result, myRole, err
	}

	for _, role := range RoleList {
		wg.Add(1)
		go func(wg *sync.WaitGroup, role Role) {
			snap, err := client.Collection(string(role)).Doc(uid).Get(ctx)
			if err != nil || len(snap.Data()) == 0 {
				wg.Done()
				return
			}
			result = snap
			founded = true
			myRole = role
			wg.Done()
			return
		}(&wg, role)
	}

	wg.Wait()
	if !founded {
		return result, myRole, errors.New("user doc not found")
	}
	return result, myRole, nil
}

func ParseUserData(snapshot *firestore.DocumentSnapshot) (User, error) {
	result := &User{}
	jsonString, err := json.Marshal(snapshot.Data())
	if err != nil {
		return *result, err
	}

	err = json.Unmarshal(jsonString, &result)
	if err != nil {
		return *result, err
	}

	return *result, nil
}

func GetUserData(uid string, ctx Context, app *firebase.App) (User, error) {
	snapshot, _, err := FindUserDocumentSnapshotAndRole(uid, ctx, app)
	if err != nil {
		return User{}, err
	}

	result, err := ParseUserData(snapshot)
	if err != nil {
		return User{}, err
	}

	return result, nil
}
