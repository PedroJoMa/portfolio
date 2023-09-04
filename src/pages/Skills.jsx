import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import mongoose from"../assets/mongoose.svg";
import "./Skills.css";

function Skills () {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="skills-container">
        <div className="front-end">
          <h1>Front end</h1>
          <img src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt = "HTML5" />
          <img src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt = "CSS3" />
          <img src = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt = "JavaScript" />
          <img src = "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          alt = "TypeScript" />
          <img src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt = "React" />
          <img src = "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
          alt = "React Router" />
          <img src = "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
          alt = "Redux" />
        </div>
        <div className="back-end">
          <h1>Back end</h1>
          <img src = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt = "JavaScript"/>
          <img src = "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          alt = "Node.js" />
          <img src = "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          alt = "TypeScript" />
          <img src = "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
          alt = "Express.js" />
          <img src = "https://img.shields.io/badge/MySQL-04638b?style=for-the-badge&logo=mysql&logoColor=white"
          alt = "MySQL" />
          <img src = "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
          alt = "MongoDB" />
          <img src ={mongoose}
          alt = "Mongoose" />
          <img src = "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
          alt = "Docker" />
          <img src = "https://img.shields.io/badge/sequelize-FFFFFF?style=for-the-badge&logo=sequelize&logoColor=blue"
          alt = "Sequelize" />
          <img src = "https://img.shields.io/badge/json%20web%20tokens-02020B?style=for-the-badge&logo=json-web-tokens&logoColor=pink"
          alt = "Json Web Tokens" />
        </div>
        <div className="test-container">
          <h1>Testes</h1>
        <img src = "https://img.shields.io/badge/Jest-02020B?style=for-the-badge&logo=Jest&logoColor=c43b13"
          alt = "Jest" />
          <img src = "https://img.shields.io/badge/testing%20library-02020B?style=for-the-badge&logo=testing-library&logoColor=red"
          alt = "Testing Library" />
          <img src = "https://img.shields.io/badge/-cypress-02020B?style=for-the-badge&logo=cypress&logoColor=058a5e"
          alt = "Cypress" />
          <img src = "https://img.shields.io/badge/mocha.js-02020B?style=for-the-badge&logo=mocha&logoColor=Brown"
          alt = "Mocha.js" />
          <img src = "https://img.shields.io/badge/chai.js-02020B?style=for-the-badge&logo=chai&logoColor=red"
          alt = "Chai.js" />
          <img src = "https://img.shields.io/badge/sinon.js-02020B?style=for-the-badge&logo=sinon"
          alt = "Sinon.js" />
        </div>
        <div className="others-container">
          <h1> Outras tecnologias</h1>
          <img src = "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
          alt = "Git" />
          <img src = "https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white"
          alt = "Bash" />
          <img src="https://img.shields.io/badge/VSCODE-FDFFFC?style=for-the-badge&logo=visualstudiocode&logoColor=007ACC" 
          alt="VSCode"/>
          <img src="https://img.shields.io/badge/LINUX-FAC8CD?style=for-the-badge&logo=linux&logoColor=000000" 
          alt= "Linux"/>
          <img src="https://img.shields.io/badge/NPM-000000?style=for-the-badge&logo=npm&logoColor=D84727" 
          alt= "Npm"/>
        </div>
      </div>
      <FooterBar />
    </div>
  )
}

export default Skills;