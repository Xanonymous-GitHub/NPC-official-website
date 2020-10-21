package models

type Activity string

const (
	QuerySelf    Activity = "QuerySelf"
	CreateMember Activity = "CreateMember"
)

var ActivityAuthMap = map[Activity][]Role{
	QuerySelf: {
		ROOT, ADMINISTRATOR, SUPERVISOR, STAFF, MEMBER, GUEST,
	},
	CreateMember: {
		ROOT, ADMINISTRATOR, SUPERVISOR,
	},
}
