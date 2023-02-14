import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'

import './styles/technologies.css'

const tecnologiesContainer = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, sobre: "Sei sobre HTML" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, sobre: "Sei sobre CSS" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, sobre: "Sei sobre JS" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, sobre: "Sei sobre Node"},
  { id: "mysql", name: "MySQL", icon: <DiMysql />, sobre: "Sei sobre MySQL" },
  { id: "react", name: "React", icon: <DiReact />, sobre: "Sei sobre React" },
]

export const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {tecnologiesContainer.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
              <p>{tech.sobre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}