package utils

import (
	. "context"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
)

func DecodeJwt(jwt string, ctx Context, app *firebase.App) (*auth.Token, error) {
	client, err := app.Auth(ctx)
	if err != nil {
		return nil, err
	}

	decodedData, err := client.VerifyIDToken(ctx, jwt)
	if err != nil {
		return nil, err
	}

	return decodedData, nil
}
