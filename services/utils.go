package services

import (
	"context"
	"encoding/json"
	firebase "firebase.google.com/go/v4"
	"io"
	"log"
)

func ParseRequestBody(body io.ReadCloser, target interface{}) error {
	return json.NewDecoder(body).Decode(target)
}

func InitializeAppDefault() *firebase.App {
	// [START initialize_app_default_golang]
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	// [END initialize_app_default_golang]

	return app
}
