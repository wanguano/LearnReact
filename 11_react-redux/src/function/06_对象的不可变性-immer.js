import { produce } from 'immer'

let book = { title: '图解Http' }

function publish(book) {
  return produce(book, drafBook => {
    drafBook.isPublished = true
  })
}

let update = publish(book)

console.log(book)
console.log(update)
