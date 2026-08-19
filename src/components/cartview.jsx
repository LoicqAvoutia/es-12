import './cartview.css'
import { usecart } from '../context/cartcontext';

export const Cartview = () =>{
    const cart = usecart();
    return(
        <>
            <div className="view">
                <h3>prodotti nel carrello</h3>
                {cart.cart.map(prod=>(
                    <div className="prodotto" key={prod.id}>
                        <h4>prodotto numero:{prod.id}</h4>
                        <p>
                            id:{prod.id}   nome:{prod.nome}   prezzo:{prod.prezzo}   quantità:{prod.quantità}
                        </p>
                    </div>
                ))}
                <button onClick={()=>cart.clearCart()}>cancella carrello</button>
            </div>
        </>
    )
}