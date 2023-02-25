import { Social } from './Social'
import './styles/sidebar.css'

export const Sidebar = () => {
  return (
    <div className="home">
      <h1>Fernando Baladei</h1>    
    <div className="sidebar">
      <div className="social-net">
        <Social />
      </div>
      <div className="links">
      <a href="#about"><h2>Sobre</h2></a>
        <a href="#technologies"><h2>Tecnologias</h2></a>
        <a href="#projects"><h2>Projetos</h2></a>
        <a href="#information"><h2>Contato</h2></a>
      </div>        
    </div>
    </div>
  )
}
