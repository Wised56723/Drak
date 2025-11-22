// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar se o modal de login está visível
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Função para fechar o modal ao clicar fora ou no X
  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setIsLoginOpen(false);
    }
  };

  return (
    <div className="drak-app">
      {/* Barra de Navegação Superior */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Drak</h1>
        </div>
        <ul className="navbar-menu">
          {/* Transformamos o Login em um botão interativo */}
          <li>
            <button 
              className="nav-btn" 
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          </li>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#creditos">Créditos</a></li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <section className="intro-header">
          <h2>O Tecelão Aguarda</h2>
          <p className="subtitle">Uma experiência de RPG textual guiada por Inteligência Artificial.</p>
        </section>

        <div className="info-grid">
          <div className="info-card">
            <h3>Imersão Total</h3>
            <p>
              Esqueça as barreiras gráficas. Em Drak, o mundo é descrito em camadas profundas de geografia, 
              política e sociedade. Você não apenas joga; você escreve a história junto com um mestre imparcial.
            </p>
          </div>

          <div className="info-card">
            <h3>Mundo Vivo</h3>
            <p>
              O cenário reage. Suas ações deixam cicatrizes na geografia e na memória dos NPCs. 
              Uma floresta queimada hoje permanece queimada amanhã para quem vier depois.
            </p>
          </div>

          <div className="info-card">
            <h3>Liberdade Infinita</h3>
            <p>
              Sem paredes invisíveis. Se você pode descrever, você pode tentar fazer. 
              A IA interpreta sua intenção e o sistema julga o resultado.
            </p>
          </div>
        </div>
      </main>

      {/* --- MODAL DE LOGIN --- */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>×</button>
            
            <div className="modal-header">
              <h3>Identifique-se</h3>
              <p>Para entrar no abismo, revele seu nome.</p>
            </div>

            <form className="drak-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Nome de Viajante</label>
                <input type="text" placeholder="Ex: Kaelthas" />
              </div>
              
              <div className="input-group">
                <label>Palavra-Passe</label>
                <input type="password" placeholder="••••••" />
              </div>

              <button type="submit" className="cta-button">
                Entrar no Mundo
              </button>
              
              <p className="forgot-pass">Esqueceu sua senha? A escuridão também.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
