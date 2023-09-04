import { useState } from 'react';
import PropTypes from 'prop-types';
import "../components/CarouselCard.css";
import "../pages/AboutMe.css";

function CarouselCard({ projetos }) {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleNext = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projetos.length);
  };

  const handlePrev = () => {
    setProjectIndex((prevIndex) =>
      prevIndex === 0 ? projetos.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projetos[projectIndex];

  return (
    <div className='projects-content'>
      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-slide">
            <img src={currentProject.imageUrl} alt={`Slide ${projectIndex}`} />
            <div className="carousel-text">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <h4>Tecnologias Utilizadas</h4>
              <div className='tech-images'>
                {currentProject.tecnologies.map((tecnologie, index) => {
                  return (
                    <div key={index}> 
                      <img src={tecnologie}/>
                    </div>
                  )
                })}
              </div>
              <h4>Mais informações:</h4>
              <a
                href={currentProject.link}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  id='curriculo'
                >
                  Visualizar Projeto
                </button>
              </a>
            </div>
          </div>
        </div>
        <button className="carousel-button carousel-prev" onClick={handlePrev}>
          Voltar
        </button>
        <button className="carousel-button carousel-next" onClick={handleNext}>
          Próximo
        </button>
      </div>
    </div>
  );
}



CarouselCard.propTypes = {
  projetos: PropTypes.array
}

export default CarouselCard;