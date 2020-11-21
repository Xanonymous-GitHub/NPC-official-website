package utils

import (
	"log"
	"net/http"
)

// handle error without custom msg.
func HandleError(w http.ResponseWriter, err error, httpCode int) {
	if err != nil {
		// write a error http response.
		http.Error(w, err.Error(), httpCode)

		// log error to cloud function history.
		log.Println(err.Error())
	}
}

// handle error with custom msg.
func HandleErrorMsg(w http.ResponseWriter, msg string, httpCode int) {
	// write a error http response.
	http.Error(w, msg, httpCode)
}
