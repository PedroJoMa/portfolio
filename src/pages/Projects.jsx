import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import imagens from "../components/Images";
import CarouselCard from "../components/CarouselCard";

function Projects () {

  const projetos = [
    {
      imageUrl: imagens.Trivia,
      title: 'Jogo de Trivia',
      description: 'O objetivo deste projeto foi criar um jogo de perguntas e respostas utilizando uma API de trivia, tive a experiência de trabalhar em grupo com 4 colegas, foi muito divertido codar e dividir tarefas.',
      tecnologies: [imagens.React, imagens.JavaScript, imagens.Css, imagens.Html, imagens.Redux, imagens.Api],
      link: "https://github.com/PedroJoMa/JogoDeTrivia",
    },
    {
      imageUrl: imagens.AppReceitas,
      title: 'App de Receitas',
      description:"O projeto app de receitas é uma aplicação voltada para o mobile a qual o usuário tem acesso a diversas receitas de comidas e bebidas, ao selecionar uma receita, são fornecidos: ingredientes necessários e modo de preparo. Realizei este trabalho em grupo com outros 4 colegas e o resultado foi muito satisfatório.",
      tecnologies: [imagens.React, imagens.JavaScript, imagens.Jest, imagens.Html, imagens.Css, imagens.Api],
      link: "https://github.com/PedroJoMa/AppDeReceitas",
    }
  ]

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <CarouselCard projetos={projetos}/>
      <FooterBar />
    </div>
  )
}

export default Projects;