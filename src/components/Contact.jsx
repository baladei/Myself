import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import './styles/contact.css'

export const Contact = () => {
  return <section id="information">
    <h2>Contato</h2>
    <div className="all-cards">
    <div className="info-card">
        <a href="tel:+5511993883193"><AiFillPhone id="phone-icon" /></a>
        <div>
            <h3>Telefone</h3>
            <p>(11)993188-3193</p>
        </div>
        </div>
        <div className="info-card">
        <a href="mailto:f.baladei@gmail.com"><AiOutlineMail id="email-icon" /></a>
        <div>
            <h3>E-mail</h3>
            <p>f.baladei@gmail.com</p>
        </div>
        </div>
        <div className="info-card">
        <a href="https://goo.gl/maps/4xpfpn4YDPtRqjBy9" target={'_blank'}><AiFillEnvironment id="pin-icon" /></a>
        <div>
            <h3>Localização</h3>
            <p>São Paulo / SP</p>
        </div>
        </div>
    </div>    
        
  </section>

  }