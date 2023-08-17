const express = require('express')
const app = express()
const port = 3000

let movies =[
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "release_date": "1994-09-10"
    },
    {
      "id": 2,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "release_date": "1972-03-24"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "release_date": "2008-07-18"
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "release_date": "1994-10-14"
    },
    {
      "id": 5,
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "release_date": "2003-12-17"
    }
  ]
  

// get movies from movies.js
app.get('/movies', (req, res) => {
    res.json(movies)
})

// add movies to the list
app.post('/movies', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        director: req.body.director,
        release_date: req.body.release_date
    }
    // push it into our array and send back a response with status code 201 - created
    movies.push(newMovie)
    res.status(201).json(newMovie)
    res.send()
})

// Get app to listen to port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})