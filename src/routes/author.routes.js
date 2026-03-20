const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthorId,
  getTopAuthors,
} = require("../controllers/author.controller");

// Atenção à ordem: as rotas mais específicas devem vir primeiro!
router.get("/top", getTopAuthors);
router.get("/", getAllAuthors);
router.get("/:id/books", getBooksByAuthorId);
router.get("/:id", getAuthorById);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;