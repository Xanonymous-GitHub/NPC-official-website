package utils

import (
	. "context"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
)

// initialized the user role as a unknown user.
var CurrentUserRole = UNKNOWN

// check if the currentUser has the privilege to execute the specific activity.
func getPrivilege(activity Activity) bool {
	// all activities and their privilege is defined in ActivityAuthMap
	for _, role := range ActivityAuthMap[activity] {
		// if currentUser's role is declared in this activity's privilege list, approve operation.
		if role == CurrentUserRole {
			return true
		}
	}

	// can't found currentUser's role in privilege list, operation denied.
	return false
}

// set CurrentUserRole, origin data from db.
func grantPrivilege(uid string, ctx Context, app *firebase.App) error {
	// find the role using uid from db.
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
