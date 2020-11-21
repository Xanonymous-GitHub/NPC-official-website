package utils

import (
	"crypto/sha512"
	"encoding/hex"
)

func getSha512(data string) string {
	h := sha512.New512_256()
	h.Write([]byte(data))
	return hex.EncodeToString(h.Sum(nil))
}
