import { useNavigate } from "react-router-dom";
import "../components/NavBar.css";

function NavBar () {
    const navigate = useNavigate();

    const handleClick = () => {
        event.preventDefault();
        const {target} = event
        navigate(`/${target.value}`);
    }

    return (
        <section className="navBar">
            <div>
                <button 
                    type="button" 
                    className="efeito preenchimento"
                    value={""}
                    onClick={handleClick}
                >
                    Inicio
                </button>
                <button 
                    type="button" 
                    className="efeito preenchimento"
                    value={"aboutme"}
                    onClick={handleClick}
                >
                    Sobre Mim
                </button>
                <button 
                    type="button" 
                    className="efeito preenchimento"
                    value={"skills"}
                    onClick={handleClick}
                >
                    Habilidades
                </button>
                <button 
                    type="button" 
                    className="efeito preenchimento"
                    value={"projects"}
                    onClick={handleClick}
                >
                    Projetos
                </button>
                <button 
                    type="button" 
                    className="efeito preenchimento"
                    value={"contact"}
                    onClick={handleClick}
                >
                    Contato
                </button>
            </div>
        </section>
    )
}

export default NavBar;