package utils

import (
	"log"
	"net/http"
)

func HandleError(w http.ResponseWriter, err error, httpCode int) {
	if err != nil {
		http.Error(w, err.Error(), httpCode)
		log.Println(err.Error())
	}
}

func HandleErrorMsg(w http.ResponseWriter, msg string, httpCode int) {
	http.Error(w, msg, httpCode)
}
