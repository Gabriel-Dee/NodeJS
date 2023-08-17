const express = require('express')
const app = express()
const port = 3000

// parse JSON using express
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let movies =[
    {
      "id": "1",
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "release_date": "1994-09-10"
    },
    {
      "id": "2",
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "release_date": "1972-03-24"
    },
    {
      "id": "3",
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "release_date": "2008-07-18"
    },
    {
      "id": "4",
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "release_date": "1994-10-14"
    },
    {
      "id": "5",
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "release_date": "2003-12-17"
    }
  ]
  

// get movies
app.get('/movies', (req, res) => {
    res.json(movies)
})

// add movies to the list.
app.post('/movies', (req, res) => {
    const newMovie = req.body

    console.log(newMovie)
    movies.push(newMovie)
    res.send("Added !")
})

// search for a movie in the list.
app.get('/movies/:id', (req, res) => {
    const id = req.params.id
     for (let movie of movies){
        if (movie.id === id){
            res.json(movie)
            return
        }
     }
     res.status(404).send("Not found!")
})

// delete a movie from the list.
app.delete('/movies/:id', (req, res) => {
    const id = req.params.id
    movies = movies.filter(movie => {
        if (movie.id !== id){
            return true
        }
        return false
    })
    res.send("Deleted !")
})

// Get app to listen to port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})