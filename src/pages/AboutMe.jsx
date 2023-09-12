import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import "../pages/AboutMe.css";
import MinhaFoto from "../assets/minhafoto.jpeg";
import SocialMedia from "../components/SocialMedia"
import Curriculo from "../assets/MeuCurriculo.pdf"

function AboutMe () {
  return(
    <div>
      <header>
        <NavBar />
      </header>
      <div className="about-page">
        <div className="aboutme">
          <div className="photo-curriculum">
            <img id="photo-about" src={MinhaFoto} alt="Minha foto de perfil"/>
            <SocialMedia />
              <a
                href={Curriculo}
                target="_blank"
                rel="noreferrer"
                id="link-to-curriculum"
              >
                <button
                  type="button"
                  id="curriculo"
                >
                  Curriculo
                </button>
              </a>
          </div>
          <div>
            <article className="text-about">
              <p>
                Olá, meu nome é <span>Pedro Jorge</span> e sou um Desenvolvedor Backend apaixonado por tecnologia e seus desdobramentos.
                Acredito que a tecnologia tem um papel fundamental em melhorar as rotinas diárias das pessoas e sempre busco contribuir para esse avanço.
                Além de facilitar e organizar ambientes complexos de trabalho, a inovação também é capaz de criar soluções que atendam às necessidades do público em geral.
              </p>
              <p>
                Durante a minha graduação em Sistemas de Informação, tive a oportunidade de conhecer os desafios enfrentados pelos programadores e as diversas áreas de atuação na programação.
                Nesse momento, descobri minha paixão pela programação e decidi buscar aprimorar meus conhecimentos. 
                Foi assim que encontrei a Trybe, onde pude desenvolver minhas habilidades em linguagens de programação e banco de dados, além de aprimorar minhas Soft Skills.
              </p>
              <p>
                Sou uma pessoa colaborativa, dedicada e adaptável a diferentes ambientes de trabalho em grupo. 
                Busco sempre contribuir com o desenvolvimento dos projetos de maneira proativa e com respeito pelos outros membros da equipe. 
                Estou disposto a enfrentar novos desafios e a aprender diariamente para me tornar um profissional cada vez melhor.
              </p>
            </article>
          </div>
        </div>
      </div>
      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}

export default AboutMe;