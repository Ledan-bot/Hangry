package controllers

import (
	"Hangry/api/db"
	"Hangry/api/models"
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

func AddMenu(c *gin.Context) {
	collection := db.OpenCollection(db.Client, "Hangry_data")
	var validate = validator.New()
	var menu models.Menu
	if err := c.BindJSON(&menu); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	validationErr := validate.Struct(menu)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}
	result, insertErr := collection.InsertOne(context.TODO(), menu)
	if insertErr != nil {
		msg := "Menu was not created"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return
	}

	c.JSON(http.StatusCreated, result)
}
