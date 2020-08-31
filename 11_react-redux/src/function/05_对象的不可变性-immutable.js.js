import { Map } from 'immutable'

let book = Map({ title: '图解Http' })

function publish(book) {
  return book.set('isPublished', true)
}

book = publish(book)

console.log(book.toJS())
