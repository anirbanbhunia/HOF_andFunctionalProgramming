const bookList = [
    {bookName:"Book1",Author:"author1",publicationYear: 1998},
    {bookName:"Book2",Author:"author2",publicationYear: 1990},
    {bookName:"Book3",Author:"author3",publicationYear: 2012},
    {bookName:"Book4",Author:"author4",publicationYear: 2017},
    {bookName:"Book5",Author:"author5",publicationYear: 1986},
    {bookName:"Book6",Author:"author6",publicationYear: 2014},
    {bookName:"Book1",Author:"author7",publicationYear: 1988},
    {bookName:"Book2",Author:"author8",publicationYear: 1980},
    {bookName:"Book3",Author:"author9",publicationYear: 2022},
    {bookName:"Book4",Author:"author10",publicationYear: 2007},
    {bookName:"Book5",Author:"author11",publicationYear: 2011},
    {bookName:"Book6",Author:"author12",publicationYear: 1914}
]

const newBookList = function newLIst(books){
    
    return books.filter((ele)=>ele.publicationYear < 2010).map((ele)=>({
            bookName:ele.bookName,
            Author: ele.Author.toUpperCase(),
            publicationYear:ele.publicationYear
    }))
}
console.log(newBookList(bookList))
