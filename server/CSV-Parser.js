const csv = require('csv-parser')
const fs = require('fs')
const {Book} = require('./db/models')
const results = []

fs
  .createReadStream('books.csv')
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    results.map(singleBook => {
      Book.create(singleBook)
    })
    console.log(JSON.stringify(results[0]))
  })
