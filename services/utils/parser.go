package utils

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
)

// parse http request or response application/json data to a declared target instance.
func ParseJSONBody(source io.ReadCloser, target interface{}) error {
	// un-serialize the origin source.
	dec := json.NewDecoder(source)

	// prevent unknown field appear in decode result.
	dec.DisallowUnknownFields()

	// put the decoded result to target(reference).
	err := dec.Decode(&target)
	if err != nil {
		return err
	}

	// verify the data is clear.
	err = dec.Decode(&struct{}{})
	if err != io.EOF {
		return err
	}

	return nil
}

// get the specific url parameter by its key
func ParseRequestParameters(r *http.Request, key string) (string, error) {
	// convert the url parameter to a map and query specific value.
	keys, ok := r.URL.Query()[key]
	if !ok || len(keys[0]) < 1 {
		return "", errors.New("not found this parameter")
	}
	return keys[0], nil
}
