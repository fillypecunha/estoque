import Proptypes from 'prop-types'


Book.prototype ={
    titulo: Proptypes.string,
    conver: Proptypes.string,
    sinopse: Proptypes.string,
    onremove: Proptypes.func
}

export default function Book({titulo,conver,sinopse, onremove}) {
    return(
       
        <div> 
            <h2>{ titulo}</h2>
            <img src= {conver} alt={""} srcSet={conver} /> 
          <p> {sinopse}</p>
        <button onClick={ onremove}>REMOVER</button>
        </div>
        
    )
    
}