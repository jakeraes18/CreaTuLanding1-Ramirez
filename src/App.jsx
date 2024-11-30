import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <h1>Bienvenido a <span>J-Commerce</span></h1>
      <ItemListContainer message="Espera los productos muy pronto..." />
    </>
  )
}

export default App
