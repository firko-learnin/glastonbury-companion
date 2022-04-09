package routes

import (
	"fiber-mongo-api/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
    //All routes related to users come here
    app.Post("/user", controllers.CreateUser)
	app.Get("/user/:userId", controllers.GetUser)
	app.Patch("/user/:userId", controllers.UpdateUser)
	app.Delete("/user/:userId", controllers.DeleteAUser)
	app.Get("/users", controllers.GetAllUsers)
}