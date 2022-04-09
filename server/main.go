package main

//Import the required dependencies
import (
	"fiber-mongo-api/configs"
	"fiber-mongo-api/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
    //Initialize a Fiber application using the New function
    app := fiber.New()
    
    //Connect to the database
    configs.ConnectDB()

    //Set up the routes
    routes.UserRoute(app)
    
//Use the Get function to route to / path and an handler function that returns a JSON of Hello from Fiber & mongoDB. fiber.Map is a shortcut for map[string]interface{}, useful for JSON returns.
    app.Get("/", func(c *fiber.Ctx) error {
        return c.JSON(&fiber.Map{"data": "Hello from Fiber & mongoDB"})
    })
//Listen on port 6000
    app.Listen(":6000")
}