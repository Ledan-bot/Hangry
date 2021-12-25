package main

import (
	"Hangry/api/controllers"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./public", true)))
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	router.GET("/test", controllers.HandleTestConnection)
	router.GET("/api/menus", controllers.GetMostOrderedMenus)
	router.Run(":8026")
}
