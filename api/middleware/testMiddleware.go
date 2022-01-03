package middleware

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func TestMiddle(c *gin.Context) {
	fmt.Println("HI Tim & Philip from Middleware")
	c.Next()
}
