import { useState } from 'react'
import Book from './componentes/Book'


function App() {
  const [conver, setConver] = useState("")
  const [titulo, setTitulo]= useState("")
  const [ book, setBook]= useState(()=> {
     const storageBook = localStorage.getItem("biblioteca")
     if(!storageBook)  return []
      return  JSON.parse(storageBook) 
  }
  )
  const [ sinopse, setSinopse]= useState("")

const addBook =({titulo , conver}) =>{
const id = Math.floor(Math.random()* 100000000 )
const book ={ id,titulo, conver, sinopse}
setBook( state => {
  const newstate = [...state, book]
localStorage.setItem("biblioteca", JSON.stringify(newstate))
return newstate
}
)}
const removeBook=(id)=>{
  setBook(state => {const newremove = state.filter(books => books.id !==id )
  localStorage.setItem("biblioteca", JSON.stringify(newremove))
  return newremove
  
  } )
}


  function stopsubmit(ev) {
    ev.preventDefault()
    addBook({titulo,conver,sinopse})
    setConver("")
    setTitulo("")
    setSinopse("")
  }


  return (
    <>
  
      <h1>BIBLIOTECA DE JOGOS</h1>
      <form onSubmit={stopsubmit}>
         <label htmlFor="name">
        <p>Titulo</p>
        <input type="text" 
        name="name" 
        id="name"
        value={titulo}
        onChange={(e)=> setTitulo(e.target.value)}
        />
      </label>
       <label htmlFor="conver"><p>Capa:</p>
        <input type="text" 
        name="conver" 
        id="conver"
        value={conver}
        onChange={(e)=> setConver(e.target.value) }
        />
        </label>
        <label htmlFor="sinopse">
        <p>sinopse</p>
        <input type="text" 
        name="sinopse" 
        id="sinop" 
        value={sinopse}
        onChange={(e)=> setSinopse(e.target.value)}
        />

        </label>
      <button type='submit'>Adicionar á Biblioteca</button>
      </form>
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
