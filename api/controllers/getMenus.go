package controllers

import (
	"Hangry/api/db"
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func GetMenus(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	cursor, err := collection.Find(context.TODO(), bson.D{{}})
	if err != nil {
		panic(err)
	}

	var menus []bson.M
	if err = cursor.All(context.TODO(), &menus); err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, menus)

}
