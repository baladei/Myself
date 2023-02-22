import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'

import './styles/technologies.css'

const tecnologiesContainer = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, sobre: "HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, sobre: "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, sobre: "JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, sobre: "O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação."},
  { id: "mysql", name: "MySQL", icon: <DiMysql />, sobre: "MySQL é um sistema de gerenciamento de banco de dados (SGBD) relacional, ou seja, que utiliza a linguagem SQL como interface. Lançado sobre a licença GPL, possui como desenvolvedor a Oracle Corporation. É multiplataforma, ou seja, possui suporte para diferentes sistemas operacionais (Windows, Linux e Mac)." },
  { id: "react", name: "React", icon: <DiReact />, sobre: "O React JS é uma biblioteca do JavaScript que tem como função criar, de maneira simples, interfaces de usuário – ou User Interface (UI). De forma resumida, podemos dizer que ele transforma uma mesma tela em partes individuais. Assim, a biblioteca simplifica o trabalho do desenvolvedor sobre cada uma delas." },
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