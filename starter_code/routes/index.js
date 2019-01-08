const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  let movieId = req.params.id;
  console.log(movieId);
  res.render("movie");
});

router.get("/movie/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movies.find({ _id: movieId })
    .then(movie => {
      res.render("movie", { movie });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
