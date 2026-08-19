import { useState } from 'react'
import './App.css'
import { Productlist } from './components/productlist'
import { Cartview } from './components/cartview'

function App() {
  const [count, setCount] = useState(0)
  /*
  Esercizio 3: Carrello della Spesa con Custom Hook (Livello Avanzato)
Obiettivo: Creare un CartContext robusto e incapsulare la logica in un Custom Hook dedicato (es. useCart).

Cosa devi fare:

Crea il CartContext e la funzione CartProvider.

Lo stato deve gestire un array di prodotti nel carrello: cart (es. [{ id: 1, name: 'Tastiera', price: 30, quantity: 1 }]).

Il provider deve esporre tre funzioni:

addToCart(product): aggiunge un prodotto (se esiste già, incrementa la quantità).

removeFromCart(productId): rimuove un prodotto.

clearCart(): svuota l'array.

Crea un Custom Hook personalizzato chiamato useCart() che restituisca direttamente useContext(CartContext) e lanci un errore chiaro se usato fuori dal CartProvider:

JavaScript
if (!context) {
  throw new Error("useCart deve essere usato dentro un CartProvider");
}
Crea un componente ProductList (per aggiungere articoli) e un componente CartView (che mostra gli articoli nel carrello, la quantità e il totale in euro).
  */

  return (
    <>
      <Productlist />
      <Cartview />
    </>
  )
}

export default App
