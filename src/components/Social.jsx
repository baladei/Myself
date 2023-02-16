import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import './styles/social.css'

const socialNetworks = [
  { name : "linkedin", icon: <FaLinkedinIn /> },
  { name : "github", icon: <FaGithub /> },
  { name : "instagram", icon: <FaInstagram /> },
]

export const Social = () => {
  return <div id="social-networks">
    {socialNetworks.map((network) => (
      <a href="#" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
      </a>
  ))}
</div>
}