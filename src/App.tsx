import Navbar from './components/Navbar'
import './App.css'
import ContenedorPrincipal from './components/ContenedorPrincipal'

function App() {
  const fraseAplicacion = `La galería más completa e interesante de fotos del espacio.`;
  return (
    <>
      <Navbar></Navbar>
      <ContenedorPrincipal fraseAplicacion={fraseAplicacion}></ContenedorPrincipal>
    </>
  )
}

export default App
