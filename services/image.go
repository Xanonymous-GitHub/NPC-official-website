package services

import (
	"encoding/json"
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
	"github.com/Xanonymous-GitHub/NPC-official-website/services/utils"
	"net/http"
)

type ImagePostRequestBody struct {
	Type string `json:"type"`
}

func Image(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost: /// @api => this api is for everyone to upload image to imagur.com. [Activity: UploadImage]
		// request Content-Type must be multipart/form-data.

		// user can choose a file type they want because imgur.com will auto convert original to several file type after uploaded.
		preferredFileType := FileType(r.FormValue("type"))

		// Get handler for filename, size and headers
		file, handler, err := r.FormFile("file")
		if err != nil {
			utils.HandleError(w, err, http.StatusBadRequest)
			return
		}
		defer func() { _ = file.Close() }()

		// restrict maximum upload of 10 MB files.
		maxSize := int64(10 << 20)

		// request a 10 MB memory.
		err = r.ParseMultipartForm(maxSize)
		if err != nil {
			utils.HandleError(w, err, http.StatusInternalServerError)
			return
		}

		// check file size limit.
		if handler.Size > maxSize {
			utils.HandleErrorMsg(w, "File too big! Must smaller than 10 MB.", http.StatusBadRequest)
			return
		}

		// determine file type.
		fileType := handler.Header["Content-Type"][0]
		switch fileType {
		case "image/jpeg":
			fileType = string(JPG)
		case "image/png":
			fileType = string(PNG)
		case "image/svg+xml":
			fileType = string(SVG)
		case "image/gif":
			fileType = string(GIF)
		default:
			utils.HandleErrorMsg(w, "Un support file type!", http.StatusBadRequest)
			return
		}

		// upload content to imgur.com
		uploadResult, err := utils.ImageUpload(file, Img, fileType)
		if err != nil {
			utils.HandleError(w, err, http.StatusBadRequest)
		}

		// make file url by the file type that user want.
		var url string
		supportedTypesInResponseUrl := []FileType{JPG, PNG, SVG, GIF, WEBP}
		url = uploadResult.Data.Link
		if preferredFileType != FileType(fileType) {
			for _, _type := range supportedTypesInResponseUrl {
				if preferredFileType == _type {
					url = utils.ImgurCdnUrl + uploadResult.Data.Id + "." + string(_type)
					break
				}
			}
		}

		// response the url to client.
		w.Header().Set("Content-Type", "application/json")
		err = json.NewEncoder(w).Encode(map[string]string{"url": url})
		if err != nil {
			utils.HandleError(w, err, http.StatusInternalServerError)
			return
		}

	default:
		utils.HandleErrorMsg(w, "Request method not allowed!", http.StatusMethodNotAllowed)
	}
}
