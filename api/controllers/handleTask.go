package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Task struct {
	Title string
	Body  string
}

func HandleGetTasks(c *gin.Context) {
	var tasks []Task
	var task Task
	task.Title = "Bake some cake"
	task.Body = `- Make a dough
	- Eat everything before baking
	- Pretend you never wanted to bake something in the first place`

	tasks = append(tasks, task)
	c.JSON(http.StatusOK, gin.H{"tasks": tasks})
}
