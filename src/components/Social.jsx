import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import './styles/social.css'

export const Social = () => {
  return (
    <div className="social">
      <a href="www.google.com.br"><FaGithub id="github" /></a>
      <a href="www.google.com.br"><FaInstagram id="instagram" /></a>
      <a href="www.google.com.br"><FaLinkedinIn id="linkedin" /></a>
    </div>
  )
}