const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  searchBooksByTitle,
} = require("../controllers/book.controller");

// A pesquisa vem primeiro para não ser confundida com um id na rota /books/:id
router.get("/search", searchBooksByTitle);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;