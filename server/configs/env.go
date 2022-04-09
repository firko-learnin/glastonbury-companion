package configs

//Import the required dependencies
import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

//Function checks if the environment variable is correctly loaded and returns the environment variable
func EnvMongoURI() string {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }
  
    return os.Getenv("MONGOURI")
}