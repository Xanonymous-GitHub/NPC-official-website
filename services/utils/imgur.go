package utils

import (
	"bytes"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"strconv"
	"time"
)

var clientId = os.Getenv("ClientId")

const (
	uploadUrl    = "https://api.imgur.com/3/upload"
	uploadMethod = http.MethodPost
	ImgurCdnUrl  = "https://i.imgur.com/"
)

func ImageUpload(file multipart.File, mediaType Media, fileType string) (ImageUploadResponse, error) {
	// define a payload to store file.
	payload := &bytes.Buffer{}

	// mount a writer to payload.
	writer := multipart.NewWriter(payload)

	// initialized a CreateFormFile instance to save file content.
	part, err := writer.CreateFormFile(string(mediaType), getSha512(strconv.FormatInt(time.Now().UnixNano()/1000, 10))+"."+fileType)
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// convert multipart file to []byte.
	content, err := ioutil.ReadAll(file)
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// store the file in payload via writer.
	_, err = part.Write(content)
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// after process done, close the writer.
	err = writer.Close()
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// initialize a new http client to send requests and receive their response.
	client := &http.Client{}

	// initialized a new http request that contain the file.
	req, err := http.NewRequest(uploadMethod, uploadUrl, payload)
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// add Imgur client-id.
	req.Header.Add("Authorization", "Client-ID "+clientId)

	// set request body type to form data.
	req.Header.Set("Content-Type", writer.FormDataContentType())

	// send the request.
	res, err := client.Do(req)
	if res != nil {
		// after save the response's body, close it.
		defer func() { _ = res.Body.Close() }()
	}
	if err != nil {
		return ImageUploadResponse{}, err
	}

	// initialized a new ImageUploadResponse container.
	responseBody := &ImageUploadResponse{}

	// get the response body.
	err = ParseJSONBody(res.Body, responseBody)
	if err != nil {
		return ImageUploadResponse{}, err
	}

	return *responseBody, nil
}
