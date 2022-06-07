const {SequelizeScopeError} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  bookId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
      isNumeric: true,
      isInt: true
    }
  },
  bookName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  authorName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      min: 0
    }
  }
})

module.exports = Book
