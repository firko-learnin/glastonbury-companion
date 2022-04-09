package configs

//Import the required dependencies
import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

//Create a ConnectDB function that first configures the client to use the URI from the .env and check for errors
func ConnectDB() *mongo.Client  {
    client, err := mongo.NewClient(options.Client().ApplyURI(EnvMongoURI()))
    if err != nil {
        log.Fatal(err)
    }
//Define a timeout of 10 seconds to use when trying to connect
    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
//Catch any errors while connecting to the database and cancel the connection if the connecting period exceeds 10 seconds
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }

    //Ping the database
    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connected to MongoDB")
	//Return the client instance
    return client
}

//Create a DB variable instance of the ConnectDB
var DB *mongo.Client = ConnectDB()

//Create a GetCollection function to retrieve and create collections on the database
func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
    collection := client.Database("golangAPI").Collection(collectionName)
    return collection
}