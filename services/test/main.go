package main

import (
	"github.com/Xanonymous-GitHub/NPC-official-website/services"
	"log"
	"net/http"
	"os"
)

// this function is only for development test.
// use go run main.go to start the dev server.
// if want to deploy, use gcloud command, for example:
// gcloud functions deploy Me --runtime go113 --trigger-http --allow-unauthenticated --region asia-northeast1
func main() {
	// add all api endpoint function here.
	http.HandleFunc("/Me", services.Me)
	http.HandleFunc("/Member", services.Member)
	http.HandleFunc("/Image", services.Image)

	// you can also custom dev server's port, default is 8080.
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
