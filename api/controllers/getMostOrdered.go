package controllers

import (
	"Hangry/api/db"
	"context"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"

	"github.com/gin-gonic/gin"
)

func GetMostOrdered(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	filter := bson.M{"tags": bson.M{"tag": "Most Ordered"}}

	cursor, err := collection.Find(context.TODO(), filter)
	if err != nil {
		panic(err)
	}
	fmt.Println(cursor)
	var menus []bson.M
	if err = cursor.All(context.TODO(), &menus); err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, menus)
}