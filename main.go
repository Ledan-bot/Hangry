package main

import (
	"Hangry/api/controllers"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	router.GET("/api/test/ping", controllers.HandleTestConnection)
	router.GET("/api/menus/all", controllers.GetMenus)
	router.GET("/api/menus/most_ordered", controllers.GetMostOrdered)
	router.Run(":8026")
}
