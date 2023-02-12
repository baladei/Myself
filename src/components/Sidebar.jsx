import { Social } from './Social'
import './styles/sidebar.css'

export const Sidebar = () => {
  return (
    <div className="home">
      <h1>Fernando Baladei</h1>    
    <div className='sidebar'>
      <div className="social">
      <Social />
      </div>
        <h2>Sobre</h2>
        <h2>Projetos</h2>
        <h2>Conhecimentos</h2>
        <h2>Contato</h2>
    </div>
    </div>
  )
}
