package controllers

import (
	"Hangry/api/db"
	"context"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gin-gonic/gin"
)

func HandleTestConnection(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	var result bson.M
	err := collection.FindOne(context.TODO(), bson.D{{"name", "Pasta"}}).Decode(&result)
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
	c.JSON(http.StatusOK, result)
}
