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

func init() {
	app = InitializeApp(ctx)
}

func Me(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		jwt, err := utils.ParseRequestParameters(r, "jwt")
		if err != nil {
			utils.HandleErrorMsg(w, "please provide jwt", http.StatusForbidden)
			return
		}

		decodedJwtData, err := utils.DecodeJwt(jwt, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "Invalid jwt", http.StatusInternalServerError)
			return
		}

		user, err := utils.FindUserData(decodedJwtData.UID, []string{"root", "administrator", "supervisor", "staff", "member", "guest"}, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "user not found!", http.StatusNotFound)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		err = json.NewEncoder(w).Encode(user)
		if err != nil {
			utils.HandleError(w, err, http.StatusInternalServerError)
			return
		}

	default:
		utils.HandleErrorMsg(w, "Request method not allowed!", http.StatusMethodNotAllowed)
	}
}
