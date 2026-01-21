
import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"

import { db } from './date/db'

function App() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []

    }

    //   console.log(db);
    const [data, setData] = useState(db)
    const [cart, setCart] = useState(initialCart)
    //const [auth,setAuth] = useState(true)
    ////const [total, setTotal] = useState(0)

    useEffect(() => {
        //  console.log("Escuchando por auth")
        localStorage.setItem('cart', JSON.stringify(cart))
       // setData(db)

    }, [cart]);

    //setTimeout(() => {
    //    setAuth(false);

    //},3000);

    function AddToCart(item) {
        const itemExists = cart.findIndex((guitar) => guitar.id === item.id)
        console.log(itemExists)

        if (itemExists >= 0) {
     
            const updateCart = [...cart]

            updateCart[itemExists].quantiy++;
            setCart(updateCart)

        } else {
                   
            item.quantiy = 1;
            setCart([...cart, item])
        }
  
     
    }
    function removeFromCart( id) {

        console.log('Eliminando...', id)

        setCart(prevCart => prevCart.filter(guitar=>   guitar.id  !== id)) // eliminar 

    }


    function increaseQuantity(id) {

        const updateCart = cart.map(item => {

            if (item.id === id && item.quantiy <10) {
                return {
                    ...item,
                    quantiy: item.quantiy + 1  // aqui le hacemos el cambio
               }

            }
            return  item //   aqui retornamso el item completo con todo y cambio

        } ) // eliminar 



        setCart(updateCart)

        console.log("incrementando ", id)
    }

    function DecreaseQuantity(id) {

        const updateCart = cart.map(item => {

            if (item.id === id && item.quantiy > 1) {
                return {
                    ...item,
                    quantiy: item.quantiy - 1  // aqui le hacemos el cambio
                }

            }
            return item //   aqui retornamso el item completo con todo y cambio

        }) // eliminar 



        setCart(updateCart)

        console.log("incrementando ", id)
    }


    function emptyCart() {

        console.log("vaceando carrito ")

        setCart([])
        //setTimeout(() => {
  
        //},3000)


    }




    return (

      <>

            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                DecreaseQuantity={DecreaseQuantity}
                emptyCart={emptyCart}

            />    



          <main className="container-xl mt-5">
              <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">

                  {
                        data.map((guitar) => 
                            (
                            <Guitar
                                key={guitar.id}
                                guitar={guitar}
                                AddToCart={AddToCart}
                                increaseQuantity={increaseQuantity}
                                
                             
                        />      
                        ))
                    }
              </div>
          </main>


          <footer className="bg-dark mt-5 py-5">
              <div className="container-xl">
                  <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
              </div>
          </footer>


    </>
  )
}

export default App
