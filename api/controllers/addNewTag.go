package controllers

import (
	"Hangry/api/db"
	"Hangry/api/models"
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
)

func AddNewTag(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	var validate = validator.New()
	name := c.Param("name")
	filter := bson.D{{"name", name}}
	var tag models.Tag
	if err := c.BindJSON(&tag); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	update := bson.M{"$push": bson.M{"tags": tag}}
	validationErr := validate.Struct(tag)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}
	result, updateErr := collection.UpdateOne(context.TODO(), filter, update)
	if updateErr != nil {
		msg := "Menu was not updated"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return
	}

	c.JSON(http.StatusOK, result)
}
