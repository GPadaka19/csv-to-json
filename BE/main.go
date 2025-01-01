package main

import (
	"encoding/csv"
	"fmt"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Tambahkan middleware CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Frontend URL
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))

	r.POST("/convert", func(c *gin.Context) {
		// Set timeout
		c.Set("timeout", 60*time.Second)

		// Get the uploaded file
		file, err := c.FormFile("file")
		if err != nil {
			c.JSON(400, gin.H{"error": "File upload failed"})
			return
		}

		// Open the file
		f, err := file.Open()
		if err != nil {
			c.JSON(500, gin.H{"error": "Could not open file"})
			return
		}
		defer f.Close()

		// Create a CSV reader with custom configuration
		reader := csv.NewReader(f)
		// Set the reader to expect quoted fields
		reader.LazyQuotes = true // This allows unescaped quotes inside fields

		// Read all records
		records, err := reader.ReadAll()
		if err != nil {
			c.JSON(500, gin.H{"error": fmt.Sprintf("Failed to read CSV data: %v", err)})
			return
		}

		// Check if the CSV file has data
		if len(records) == 0 {
			c.JSON(400, gin.H{"error": "CSV file is empty"})
			return
		}

		// Get the headers
		headers := records[0]
		var result []map[string]string

		// Iterate over the remaining rows
		for _, record := range records[1:] {
			if len(record) == len(headers) {
				row := make(map[string]string)
				for i, value := range record {
					row[headers[i]] = value
				}
				result = append(result, row)
			}
		}

		// Return the JSON response
		c.JSON(200, gin.H{"json": result})
	})

	// Start the server
	r.Run(":8081")
}
