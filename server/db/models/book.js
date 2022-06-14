const {SequelizeScopeError} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  bookID: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
      notEmpty: true,
      isNumeric: true,
      isInt: true
    }
  },
  title: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING(1234),
    validate: {
      notEmpty: true
    }
  },
  isbn: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  isbn13: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  textReviewsCount: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 0
    }
  }
})

module.exports = Book
