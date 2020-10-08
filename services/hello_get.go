package services

import (
	"fmt"
	"log"
	"net/http"
)

func HelloGet(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprint(w, "Hello, World!")
	if err != nil {
		log.Fatalln(err)
	}
}
