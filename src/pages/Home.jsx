import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import "../pages/Home.css"
import Ifba from "../assets/ifbalogo.jpg"
import Me from "../assets/Me.jpeg"
import Trybe from "../assets/trybelogo.png"
import SocialMedia from "../components/SocialMedia";

function Home () {
    return(
        <section>
            <header>
                <NavBar />
            </header>
            <div className="body-page">
                <div className="simple-presentation">
                    <div className="identification">
                        <div className="my-work">
                            <img id="photo" src={Me} alt="Minha foto de perfil" />
                            <h1 id="name">Pedro Jorge</h1>
                            <p id="work">Desenvolvedor Web</p>
                        </div>
                        <div className="information-container">
                            <div>
                                <h1>Seja bem vindo ao meu PortFolio! ☕🧑‍💻</h1>
                            </div>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <h1 id="timeline-title">Minha Trajetória</h1>
                <div className="education-timeline">
                    <section id="ifba-container">
                        <img src={Ifba} alt="Logo do IFBA"/>
                        <article>
                            Em 2019, iniciei meus estudos em tecnologia com o curso de Bacharelado em Sistemas de Informação. Durante esse período, tive meu primeiro contato com a programação, aprendendo a linguagem de pseudocódigo Portugol e a linguagem C. Tive a gratificante experiência de desenvolver algoritmos focados na resolução de problemas.
                        </article>
                    </section>
                    <section id="trybe-container">
                        <img src={Trybe} alt="Logo da Trybe"/>
                        <article>
                            Entrei na Trybe no ano de 2022 com o objetivo de aprofundar meus conhecimentos em desenvolvimento web e tive uma ótima surpresa, o curso trouxe muitos aprendizados para minha carreira, tive a oportunidade de estudar Hard Skills voltadas para o mercado de trabalho, além dos conhecimentos voltados a Soft Skills.
                        </article>
                    </section>
                    <section id="inprogress-container">
                        <article>⚠️ in progress ... </article>
                    </section>
                </div>
            </div>
            <FooterBar />
        </section>
    )
}

export default Home;