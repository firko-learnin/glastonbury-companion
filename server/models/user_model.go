package models

//Declare a user as a type
type User struct {
    Id string                 `json:"Id,omitempty"` //Firebase UID
    UID     string             `json:"UID,omitempty" validate:"required"` //Firebase UID
    Events    []string             `json:"Events,omitempty"` //List of event IDs
}