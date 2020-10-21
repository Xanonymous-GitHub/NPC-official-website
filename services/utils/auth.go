package utils

import (
	. "context"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
)

var CurrentUserRole = UNKNOWN

func getPrivilege(activity Activity) bool {
	for _, role := range ActivityAuthMap[activity] {
		if role == CurrentUserRole {
			return true
		}
	}
	return false
}

func grantPrivilege(uid string, ctx Context, app *firebase.App) error {
	_, role, err := FindUserDocumentSnapshotAndRole(uid, ctx, app)
	if err != nil {
		return err
	}

	// grant it.
	CurrentUserRole = role
	return nil
}

func DecodeJwt(jwt string, ctx Context, app *firebase.App) (*auth.Token, error) {
	// init firebase auth instance.
	client, err := app.Auth(ctx)
	if err != nil {
		return nil, err
	}

	// verify jwt.
	decodedData, err := client.VerifyIDToken(ctx, jwt)
	if err != nil {
		return nil, err
	}

	return decodedData, nil
}

func CanDoThis(uid string, activity Activity, ctx Context, app *firebase.App) bool {
	// grant privilege.
	err := grantPrivilege(uid, ctx, app)
	if err != nil {
		return false
	}

	// query activity privilege for current user.
	return getPrivilege(activity)
}
