package utils

import (
	. "context"
	"encoding/json"
	"errors"
	firebase "firebase.google.com/go/v4"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
	"sync"
)

func FindUserData(uid string, places []string, ctx Context, app *firebase.App) (User, error) {
	result := &User{}
	founded := false
	var wg sync.WaitGroup

	client, err := app.Firestore(ctx)
	if err != nil {
		return *result, err
	}

	wg.Add(len(places))
	for _, place := range places {
		go func(wg *sync.WaitGroup, place string) {
			snapShot, err := client.Collection(place).Doc(uid).Get(ctx)
			if err != nil {
				wg.Done()
				return
			}

			jsonString, err := json.Marshal(snapShot.Data())
			if err != nil {
				wg.Done()
				return
			}

			err = json.Unmarshal(jsonString, result)
			if err != nil {
				wg.Done()
				return
			}

			founded = true
			wg.Done()
			return
		}(&wg, place)
	}

	wg.Wait()
	if !founded {
		return *result, errors.New("user doc not found")
	}
	return *result, nil
}
