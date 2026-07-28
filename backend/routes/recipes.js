const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all recipes
router.get("/", (req, res) => {
    db.query("SELECT * FROM recipes", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Add recipe
router.post("/", (req, res) => {
    const { recipe_name, ingredients, instructions } = req.body;

    db.query(
        "INSERT INTO recipes(recipe_name, ingredients, instructions) VALUES (?, ?, ?)",
        [recipe_name, ingredients, instructions],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "Recipe Added Successfully"
            });
        }
    );
});

module.exports = router;
