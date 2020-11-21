package models

type Activity string

// define all backend activities.
const (
	QuerySelf    Activity = "QuerySelf"
	CreateMember Activity = "CreateMember"
	UploadImage  Activity = "UploadImage"
)

// define every activity's privilege roles, if a user's role in list means he/she can do this operation.
var ActivityAuthMap = map[Activity][]Role{
	QuerySelf: {
		ROOT, ADMINISTRATOR, SUPERVISOR, STAFF, MEMBER, GUEST,
	},
	CreateMember: {
		ROOT, ADMINISTRATOR, SUPERVISOR,
	},
	UploadImage: {
		ROOT, ADMINISTRATOR, SUPERVISOR, STAFF, MEMBER, GUEST,
	},
}
