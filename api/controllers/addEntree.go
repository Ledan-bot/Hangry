package controllers

import (
	"Hangry/api/db"
	"Hangry/api/models"
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func AddEntree(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	var validate = validator.New()
	name := c.Param("name")
	filter := bson.D{primitive.E{Key: "name", Value: name}}
	var entree models.Entree
	if err := c.BindJSON(&entree); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	update := bson.M{"$push": bson.M{"entrees": entree}}
	validationErr := validate.Struct(entree)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}
	result, updateErr := collection.UpdateOne(context.TODO(), filter, update)
	if updateErr != nil {
		msg := "Menu was not updated & the entree was not added"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return
	}

	c.JSON(http.StatusCreated, result)
}
