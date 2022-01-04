package main

import (
	"Hangry/api/controllers"
	"Hangry/api/middleware"
	"io"
	"os"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	setupServer().Run(":8026")
}

func setupServer() *gin.Engine {
	file, _ := os.Create("Hangry.log")
	gin.DefaultWriter = io.MultiWriter(file)
	router := gin.Default()
	router.Use(gin.LoggerWithFormatter(middleware.Logger))
	router.Use(gin.Recovery())

	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	router.GET("/api/test/ping", middleware.TestMiddle, controllers.HandleTestConnection)
	router.GET("/api/menus/all", controllers.GetMenus)
	router.GET("/api/menus/most_ordered", controllers.GetMostOrdered)
	router.POST("/api/menu/add", controllers.AddMenu)
	router.POST("/api/menu/tag/:name", controllers.AddNewTag)
	router.DELETE("/api/menu/tag/:name", controllers.DeleteTag)
	router.POST("/api/menu/entree/:name", controllers.AddEntree)
	return router
}
