import Github from "../assets/githublogo.svg"
import LinkedIn from "../assets/linkedinlogo.svg"
import WhatsApp from "../assets/whatsapplogo.svg"
import "../components/SocialMedia.css"

function SocialMedia() {
  return (
    <div>
      <div className="contact">
        <a
          href="https://github.com/PedroJoMa"
          target="_blank" rel="noreferrer"                     
        >
          <img src={Github} />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-jorge-machado-de-jesus-filho-dev/"
          target="_blank" rel="noreferrer"
        >
          <img src={LinkedIn}/>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5575981057109&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio.&type=phone_number&app_absent=0"
          target="_blank" rel="noreferrer"
        >
          <img src={WhatsApp} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;