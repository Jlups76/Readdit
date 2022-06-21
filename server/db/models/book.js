const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  bookID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    validate: {
      notEmpty: true,
      isNumeric: true,
      isInt: true
    }
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  authors: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  averageRating: {
    type: Sequelize.FLOAT,
    validate: {
      notEmpty: true
    }
  },
  isbn: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  isbn13: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  languageCode: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  numPages: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  ratingsCount: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  textReviewsCount: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  publicationDate: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  publisher: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 0
    }
  }
})

module.exports = Book
