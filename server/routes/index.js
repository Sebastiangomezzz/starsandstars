const router = require("express").Router();
const authRoutes = require("./auth");

const favoriteRoutes = require("./favorites.route")

const suggestionRoutes = require("./suggestion.routes")

router.use("/auth", authRoutes);

router.use("/suggestions", suggestionRoutes);

router.use("/favorites", favoriteRoutes);



/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;

