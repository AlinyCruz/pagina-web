import React from "react";
import "./css/Main.css";
import Slider from "./Slider";

const Main = () => {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Imagem 1",
      text: "Trabalho em equipe",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Imagem 2",
      text: "Comprometimento",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Imagem 3",
      text: "Dedicação",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Imagem 4",
      text: "Flexibilidade",
    },
  ];

  return (
    <main>
      <Slider />
      <br />
      <article id="conteudo">
        <div id="texto-conteudo">
          <h2>ATUALIDADES: CONHEÇA A IA !!!</h2>
          <h3>A Inteligência Artificial (IA) é uma das áreas mais fascinantes e promissoras da tecnologia atual. Ela permite que máquinas e dispositivos eletrônicos realizem tarefas que antes eram exclusivas dos seres humanos. E não apenas tarefas mecânicas, mas também tarefas que exigiam a atuação de profissionais especializados. <a href="https://www.alura.com.br/artigos/inteligencia-artificial-ia#:~:text=A%20Intelig%C3%AAncia%20Artificial%20(IA)%20%C3%A9,a%20atua%C3%A7%C3%A3o%20de%20profissionais%20especializados."> Saiba mais...</a></h3>
          <br />
          <h3>Somos uma empresa que:</h3>
          <ul>
            <li>Atende as necessidades do cliente com qualidade.</li>
            <li>Se atenta a todos os detalhes para um ótimo resultado.</li>
            <li>Priva a parceria e relacionamento com nossos clientes.</li>
            <li>Se compromete com novos desafios.</li>
          </ul>
        </div>
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-robo" />
      </article>

      <br /><br />
      <div id="destaques">
        <h2>DESTAQUES</h2>
        <div id="div-img">
          {images.map((image) => (
            <div className="img-text" key={image.id}>
              <img id="destaques-img" src={image.src} alt={image.alt} />
              <p id="destaques-p">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
