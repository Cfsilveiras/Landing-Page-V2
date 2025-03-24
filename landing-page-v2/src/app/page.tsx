import Image from "next/image";
import Icon from "./components/Icon";


export default function Home(){
  return (
    <main>

      
      <header>


        <div className="container-menu">
          <div className="titles">
            <h1>Project I</h1>
            <p>Landing Page | <span>NEXT & REACT</span> </p>
          </div>
        </div>




      </header>

    <section id="home">
    


    </section>


    <nav className="menu">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/devfilipesilveira/" target="_blank">
            <Icon name="bx bxl-linkedin" size="24px" />
            </a>
          </li>
          <li>
            <a href="#home">
            <Icon name="bx-home" size="24px" />

            </a>
          </li>
          <li>
            <a href="https://github.com/Cfsilveiras" target="_blank">
              <Icon name="bx bxl-github" size="24px" />
            </a>
          </li>
        </ul>
      </nav>
Transformar esse menu em um componente que abre e fecha, como um menu deslizante, ao clicar no ícone de menu.


    <section className="main-container">
      <h2 className="main-title">About me</h2>
      <p className="main-text">
  I'm a web developer. I have experience in front-end development, and I'm currently studying new languages while improving my skills.<br />
  This page, <span>Project I</span>, serves as a hub for my future projects. I intend to use this page as a mini portfolio to showcase my work!
  Below, you can learn more about me and my personal projects. <br></br>In the left-side menu, you can access my social media, including <span>GitHub</span> and <span>LinkedIn</span>.
</p>


    </section>
      
    </main>
  );

}