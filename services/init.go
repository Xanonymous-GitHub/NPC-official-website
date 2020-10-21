package services

import (
	. "context"
	firebase "firebase.google.com/go/v4"
	"golang.org/x/net/context"
	"log"
)

var (
	ctx = context.Background()
	app *firebase.App
)

func init() {
	app = InitializeApp(ctx)
}

func InitializeApp(ctx Context) *firebase.App {
	config := &firebase.Config{
		ProjectID: "npc-services",
	}

	app, err := firebase.NewApp(ctx, config)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	return app
}
