import './home.css';
import github from '../../assets/github_icon.svg'; // Certifique-se de que o nome do arquivo está correto
import linkedin from '../../assets/linkedin_icon.svg';
import java from '../../assets/java.svg';
import react from '../../assets/react.svg';
import spring from '../../assets/spring.svg';
import typescript from '../../assets/typescript.svg';
import node from '../../assets/node.svg';
import sql from '../../assets/mysql.svg';
import profilePic from '../../assets/profile_pic.jpg'; // Substitua pelo caminho correto da sua imagem de perfil

export default function Home() {
  return (
    <>
      <div className="nav">
        <h1>Igor Nunes Teixeira</h1>
        <div>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
      <div className="main-container">
        <div className="info-container">
          <h1>Full-Stack Developer 👋</h1>
          <p>Olá, sou o Igor. Apaixonado por códigos</p>
          <div className="social-tech-container">
            <div className="social-icons">
              <a href="https://github.com/IgornTeii" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub icon" />
              </a>
              <a href="https://linkedin.com/in/IgornTeii" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn icon" />
              </a>
            </div>
            <div className="tech-stack">
              <p>Tech Stack |</p>
              <img src={java} alt="Java logo" />
              <img src={spring} alt="Spring logo" />
              <img src={react} alt="React logo" />
              <img src={typescript} alt="TypeScript logo" />
              <img src={node} alt="Node.js logo" />
              <img src={sql} alt="SQL logo" />
            </div>
          </div>
        </div>
        <div className="profile-pic-container">
          <img src={profilePic} alt="Igor Nunes Teixeira" className="profile-pic" />
        </div>
      </div>
    </>
  );
}
