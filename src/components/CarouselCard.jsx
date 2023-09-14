import { useState } from 'react';
import PropTypes from 'prop-types';
import "../components/CarouselCard.css";
import "../pages/AboutMe.css";
import Right from "../assets/right-arrow.svg";
import Left from "../assets/left-arrow.svg";

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

  const handleNameTech = (name) => {
    const regex = /\/src\/assets\/(\w+)\.svg/;

    const match = regex.exec(name);

    if (match && match.length > 1) {
      const nomeTecnologia = match[1];
      return nomeTecnologia;
    } else {
      return "Nenhuma correspondência encontrada.";
    }

  }

  const currentProject = projetos[projectIndex];

  return (
    <div className='projects-content'>
      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-slide">
            <img id="project-image" src={currentProject.imageUrl} alt={`Slide ${projectIndex}`} />
            <div className="carousel-text">
              <h3 id="project-title">{currentProject.title}</h3>
              <p id="project-description">{currentProject.description}</p>
              <h4>Tecnologias Utilizadas:</h4>
              <div className='tech-images'>
                {currentProject.tecnologies.map((tecnologie, index) => {
                  return (
                    <div id="technologie" key={index}> 
                      <img src={tecnologie}/>
                      <p>
                        {
                          handleNameTech(tecnologie)
                        }
                      </p>
                    </div>
                  )
                })}
              </div>
                <h4>Mais informações:</h4>
              <div className='more-info'>
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    id='curriculo'
                  >
                    Github
                  </button>
                </a>
                <a
                  href={currentProject.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    id='curriculo'
                  >
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-button carousel-prev" onClick={handlePrev}>
          <img className="button-image" src={Left}/>
        </button>
        <button className="carousel-button carousel-next" onClick={handleNext}>
        <img className="button-image" src={Right}/>
        </button>
    </div>
  );
}



CarouselCard.propTypes = {
  projetos: PropTypes.array
}

export default CarouselCard;