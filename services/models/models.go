package models

type Role string

// enum all user's account role.
const (
	ROOT          Role = "root"
	ADMINISTRATOR Role = "administrator"
	SUPERVISOR    Role = "supervisor"
	STAFF         Role = "staff"
	MEMBER        Role = "member"
	GUEST         Role = "guest"
	UNKNOWN       Role = "unknown"
)

// define all roles in this system.
var RoleList = []Role{
	ROOT, ADMINISTRATOR, SUPERVISOR, STAFF, MEMBER, GUEST,
}

// define a user's data schema.
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

type Media string

const (
	Img Media = "image"
	Vdo Media = "video"
)

type FileType string

const (
	JPG  FileType = "jpg"
	PNG  FileType = "png"
	SVG  FileType = "svg"
	GIF  FileType = "gif"
	WEBP FileType = "webp"
)

// define the response schema of the upload image response by imgur.com
type ImageUploadResponse struct {
	Data struct {
		Id          string   `json:"id"`
		Title       string   `json:"title"`
		Description string   `json:"description"`
		Datetime    int      `json:"datetime"`
		Type        string   `json:"type"`
		Animated    bool     `json:"animated"`
		Width       int      `json:"width"`
		Height      int      `json:"height"`
		Size        int      `json:"size"`
		Views       int      `json:"views"`
		Bandwidth   int      `json:"bandwidth"`
		Vote        string   `json:"vote"`
		Favorite    bool     `json:"favorite"`
		Nsfw        string   `json:"nsfw"`
		Section     string   `json:"section"`
		AccountUrl  string   `json:"account_url"`
		AccountId   int      `json:"account_id"`
		IsAd        bool     `json:"is_ad"`
		InMostViral bool     `json:"in_most_viral"`
		Tags        []string `json:"tags"`
		AdType      int      `json:"ad_type"`
		AdUrl       string   `json:"ad_url"`
		InGallery   bool     `json:"in_gallery"`
		Deletehash  string   `json:"deletehash"`
		Name        string   `json:"name"`
		Link        string   `json:"link"`
		HasSound    bool     `json:"has_sound"`
		Mp4         string   `json:"mp4"`
		Hls         string   `json:"hls"`
	} `json:"data"`
	Success bool `json:"success"`
	Status  int  `json:"status"`
}
