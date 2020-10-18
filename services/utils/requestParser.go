package utils

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
)

func ParseJSONBody(r *http.Request, target interface{}) (int, string) {
	if r.Header.Get("Content-Type") != "application/json" {
		msg := "Content-Type header is not application/json"
		return http.StatusUnsupportedMediaType, msg
	}

	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	err := dec.Decode(&target)
	if err != nil {
		return http.StatusBadRequest, "request is not a valid json format or have some unknown fields!"
	}

	err = dec.Decode(&struct{}{})
	if err != io.EOF {
		msg := "Request body must only contain a single JSON object"
		return http.StatusBadRequest, msg
	}

	return http.StatusOK, ""
}

func ParseRequestParameters(r *http.Request, key string) (string, error) {
	keys, ok := r.URL.Query()[key]
	if !ok || len(keys[0]) < 1 {
		return "", errors.New("not found this parameter")
	}
	return keys[0], nil
}
