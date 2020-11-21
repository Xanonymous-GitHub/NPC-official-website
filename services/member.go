package services

import (
	. "github.com/Xanonymous-GitHub/NPC-official-website/services/models"
	"github.com/Xanonymous-GitHub/NPC-official-website/services/utils"
	"net/http"
)

type memberPostRequestBody struct {
	Jwt string `json:"jwt"`
}

func Member(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost: /// @api => this api is for supervisors+ to create a club member. [Activity: CreateMember]
		// get request body and parse.
		requestData := &memberPostRequestBody{}
		err := utils.ParseJSONBody(r.Body, requestData)
		if err != nil {
			utils.HandleErrorMsg(w, "Invalid Request Body", http.StatusBadRequest)
			return
		}

		// analyze the jwt and find the uuid.
		decodedJwtData, err := utils.DecodeJwt(requestData.Jwt, ctx, app)
		if err != nil {
			utils.HandleErrorMsg(w, "Invalid jwt", http.StatusUnauthorized)
			return
		}

		// check permission.
		if !utils.CanDoThis(decodedJwtData.UID, CreateMember, ctx, app) {
			utils.HandleErrorMsg(w, "You don't have the permission to do this activity, access denied.", http.StatusForbidden)
			return
		}

		// TODO create user...

	default:
		utils.HandleErrorMsg(w, "Request method not allowed!", http.StatusMethodNotAllowed)
	}
}
