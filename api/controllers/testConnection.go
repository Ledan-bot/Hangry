package controllers

import (
	"github.com/gin-gonic/gin"
)

func HandleTestConnection(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}
