package services

import (
	"encoding/json"
	"github.com/Xanonymous-GitHub/NPC-official-website/services/utils"
	"net/http"
)

func Me(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet: /// @api => this api is for everyone to get their user-data. [Activity: QuerySelf]
		// get jwt from request parameter.
		jwt, err := utils.ParseRequestParameters(r, "jwt")
		if err != nil {
			utils.HandleErrorMsg(w, "please provide jwt", http.StatusBadRequest)
			return
		}

		// analyze the jwt and find the uuid.
		decodedJwtData, err := utils.DecodeJwt(jwt, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "Invalid jwt", http.StatusUnauthorized)
			return
		}

		// use this uuid to find the user data in firestore.
		user, err := utils.GetUserData(decodedJwtData.UID, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "user not found!", http.StatusNotFound)
			return
		}

		// response the founded user-data to client.
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
