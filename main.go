package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	app := fiber.New()

	// Configure CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	// Routes
	api := app.Group("/api")
	
	// Movies routes
	movies := api.Group("/movies")
	movies.Get("/popular", handleGetPopularMovies)
	movies.Get("/trending", handleGetTrendingMovies)
	movies.Get("/top-rated", handleGetTopRatedMovies)
	movies.Get("/:id/videos", handleGetMovieVideos)

	// TV Shows routes
	tvShows := api.Group("/tv")
	tvShows.Get("/popular", handleGetPopularTVShows)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(app.Listen(":" + port))
}

func handleGetPopularMovies(c *fiber.Ctx) error {
	// Implementation will be in separate handlers file
	return c.JSON(fiber.Map{
		"message": "Popular movies endpoint",
	})
}