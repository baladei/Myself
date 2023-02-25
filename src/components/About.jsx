import Avatar from '../img/Myself.jpg'

import './styles/about.css'

export const About = () => {
  return (
    <div id='about'>
        <img src={Avatar} alt="Fernando Baladei" />
        <div className="descrip">
        <h1>Web Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, optio earum iure rerum officiis aspernatur. Iure aspernatur nulla ex, explicabo illo iusto in suscipit quae eaque totam necessitatibus reiciendis itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum neque magni ad eaque quas delectus laudantium eveniet quos. Libero facilis vel incidunt amet aspernatur? Harum fugit eligendi velit officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, saepe quia velit fugit blanditiis necessitatibus tenetur assumenda nisi architecto impedit rem, enim vitae, quam sit. Rem maxime perspiciatis eius unde.</p>
        </div>        
    </div>
  )
}
