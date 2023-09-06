
import Book from './componentes/Book'
import Formulario from './componentes/text'
import addandRemove from './hooks/functions'


function App() {
  const{ book, addBook,removeBook}= addandRemove()
  return (
    <>
  
      <h1>BIBLIOTECA DE JOGOS</h1>
      <Formulario addBook={addBook}
      />
     <div className='book'>
      {book.map((books)=>{
        return(
          <Book key={books.id}
                titulo={books.titulo}
                conver={books.conver}
                sinopse= {books.sinopse}
                onremove= {()=> removeBook(books.id)}
          
          />
        )
      })}
     </div>

    </>
  )
}

export default App
