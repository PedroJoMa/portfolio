import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import "./Contact.css";
import SocialMedia from "../components/SocialMedia";
import Writer from "../assets/writer.svg"
import "./AboutMe.css";

function Contact () {
  return (
    <div>
      <header>
        <NavBar />
      </header>
        <h1 id="contact-title">Contato</h1>
        <div className="contact-content">
          <div className="contact-simpletext">
            <h1>Envie sua Mensagem!</h1>
            <h2>Sinta-se a vontade para mandar uma mensagem!</h2>
            <h2>Peço que informe o máximo de informações possíveis para que eu também possa te dar o melhor retorno possível.</h2>
            <SocialMedia />
          </div>
          <div className="contact-form">
            <form
              target="_blank"
              action="https://formsubmit.co/2ea0ea3dc55a92757bdc7ccdcca9e390"
              method="POST"
              className="contact-field"
            >
              <div className="contact-idetification">
              <input type="text" name="name" placeholder="Nome" required/>
              <input type="email" name="email" placeholder="Email" required/>
              </div>
              <textarea name="message" placeholder="Sua Mensagem" rows="4" required/>
              <button type="submit" id="curriculo">Enviar</button>
            </form>
          </div>
          <div className="contact-image">
            <img id="writer-image" src={Writer}/>
          </div>
        </div>
      <FooterBar />
    </div>
  )
}

export default Contact;