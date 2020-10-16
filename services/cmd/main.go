package main

import (
	"github.com/Xanonymous-GitHub/NPC-official-website/services"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/me", services.DecodeJwt)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
