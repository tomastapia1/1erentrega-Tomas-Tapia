import './App.css'
import Titulo from "./components/Titulo"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  const saludo = "Hola"

  return (
    <div>
      <NavBar />
      <h1 className='titulo' >{saludo}</h1>
      <ItemListContainer saludo = {"Bienenidos a mi sitio de camaras de seguridad"} />
      <Titulo />
    </div>
  )
}

export default App
