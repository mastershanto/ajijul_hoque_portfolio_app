// ============================================================================
// Go 1.24 / Gin - High-Throughput Concurrent Microservice Contract
// ============================================================================

package main

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type PortfolioHandler struct {
	// Inject Repository interface (Ports & Adapters)
}

func main() {
	r := gin.New()
	r.Use(gin.Recovery(), gin.Logger())

	// CORS Middleware
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	v1 := r.Group("/api/v1")
	{
		v1.GET("/profile", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"id":         "ajijul-hoque-profile",
				"name":       "Ajijul Hoque",
				"title":      "AI Systems Architect & Full-Stack Engineer",
				"bioSummary": "Architecting autonomous multi-agent reasoning networks using LangGraph & LLMs.",
			})
		})

		v1.GET("/projects", func(c *gin.Context) {
			c.JSON(http.StatusOK, []gin.H{
				{
					"id":       "proj-1",
					"title":    "Agentic Workflow Orchestrator",
					"category": "ai-engineering",
					"tags":     []string{"LangGraph", "Python 3.12", "FastAPI"},
				},
			})
		})

		v1.POST("/contact", func(c *gin.Context) {
			var payload struct {
				Name    string `json:"name" binding:"required"`
				Email   string `json:"email" binding:"required,email"`
				Message string `json:"message" binding:"required"`
			}
			if err := c.ShouldBindJSON(&payload); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			c.JSON(http.StatusOK, gin.H{
				"success":   true,
				"messageId": "msg-go-" + time.Now().Format("20060102150405"),
				"timestamp": time.Now().UTC().Format(time.RFC3339),
			})
		})
	}

	r.Run(":8080")
}
