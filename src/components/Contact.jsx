import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

export const Contact = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(11)993188-3193</p>
        </div>
        </div>
        <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>f.baladei@gmail.com</p>
        </div>
        </div>
        <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>São Paulo / SP</p>
        </div>
        </div>
        
  </section>
  
  }