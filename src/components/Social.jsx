import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

import './styles/social.css'

const socialNetworks = [
  { name : "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/baladei/"},
  { name : "github", icon: <FaGithub />, link: "https://github.com/baladei"},
  { name : "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/fernandobaladei/"},
  { name: "facebook" ,icon: <FaFacebook />, link: "https://pt-br.facebook.com/fernando.baladei/"}
]

export const Social = () => {
  return <div id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.link} className='social-btn' id={network.name} key={network.name} target={'_blank'}>
          {network.icon}
      </a>
  ))}
</div>
}