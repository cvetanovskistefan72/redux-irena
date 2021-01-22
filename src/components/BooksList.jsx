import React from 'react'
import { useSelector } from 'react-redux'
import { BooksItem } from './BooksItem'

export const BooksList = () => {
    const books = useSelector(state => state.books)
    const { text } = useSelector(state => state.filters)
    
    const filteredBooks = text ? filterByText(books, text) : books
  
     
    return (
        <div>
            {filteredBooks.map((book)=><BooksItem key={book.id} book={book}/>)}
        </div>
    )
}
const filterByText =  (books, text)=>{
    return books.filter((book) => book.title.toLowerCase().includes(text.toLowerCase()))
}

