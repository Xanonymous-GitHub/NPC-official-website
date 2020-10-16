package services

import (
	"context"
	"log"
	"net/http"
)

type result struct {
	jwt string
}

func DecodeJwt(w http.ResponseWriter, r *http.Request) {
	data := &result{}

	// parse request body
	err := ParseRequestBody(r.Body, data)
	if err != nil {
		log.Fatalln(err)
	}

	app := InitializeAppDefault()
	ctx := context.Background()

	// auth jwt
	client, err := app.Auth(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	decodedData, err := client.VerifyIDToken(ctx, data.jwt)
	if err != nil {
		log.Fatalln(err)
	}
	println(decodedData)
}
