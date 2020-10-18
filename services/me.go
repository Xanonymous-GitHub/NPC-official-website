package services

import (
	"context"
	"encoding/json"
	firebase "firebase.google.com/go/v4"
	"github.com/Xanonymous-GitHub/NPC-official-website/services/utils"
	"net/http"
)

var (
	ctx = context.Background()
	app *firebase.App
)

type result struct {
	Jwt string `json:"jwt"`
}

func init() {
	app = InitializeApp(ctx)
}

func Me(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "POST":
		requestData := &result{}

		code, msg := utils.ParseJSONBody(r, requestData)
		if msg != "" {
			utils.HandleErrorMsg(w, msg, code)
			return
		}

		decodedJwtData, err := utils.DecodeJwt(requestData.Jwt, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "Invalid jwt", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		err = json.NewEncoder(w).Encode(decodedJwtData)
		if err != nil {
			utils.HandleError(w, err, http.StatusInternalServerError)
			return
		}

	default:
		utils.HandleErrorMsg(w, "Request method not allowed!", http.StatusMethodNotAllowed)
	}
}
