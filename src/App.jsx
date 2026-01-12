
import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"

import { db } from './date/db'

function App() {

 //   console.log(db);
    const [data, setData] = useState(db)
    //const [auth,setAuth] = useState(true)
    ////const [total, setTotal] = useState(0)

    useEffect(() => {
      //  console.log("Escuchando por auth")
        setData(db)

    }, []);

    //setTimeout(() => {
    //    setAuth(false);

    //},3000);




    return (

      <>

          <Header />    



          <main className="container-xl mt-5">
              <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">

                  {
                        data.map((guitar) => 
                            (
                        <Guitar
                                guitar={guitar}
                          

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
