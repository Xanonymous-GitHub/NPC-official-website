package models

type Role string

const (
	ROOT          Role = "root"
	ADMINISTRATOR Role = "administrator"
	SUPERVISOR    Role = "supervisor"
	STAFF         Role = "staff"
	MEMBER        Role = "member"
	GUEST         Role = "guest"
	UNKNOWN       Role = "unknown"
)

var RoleList = []Role{
	ROOT, ADMINISTRATOR, SUPERVISOR, STAFF, MEMBER, GUEST,
}

type User struct {
	Uid           string                 `json:"uid"`
	UserId        string                 `json:"user_id"`
	StudentId     string                 `json:"student_id"`
	Email         string                 `json:"email"`
	DisplayName   string                 `json:"display_name"`
	RealName      string                 `json:"real_name"`
	Character     string                 `json:"character"`
	Description   string                 `json:"description"`
	Avatar        string                 `json:"avatar"`
	ClothesSize   string                 `json:"clothes_size"`
	Department    string                 `json:"department"`
	Grade         int8                   `json:"grade"`
	HasBlueVerify bool                   `json:"has_blue_verify"`
	HasGreyVerify bool                   `json:"has_grey_verify"`
	IsGetClothes  bool                   `json:"is_get_clothes"`
	RegisterTime  int                    `json:"register_time"`
	Additional    map[string]interface{} `json:"additional"`
}
