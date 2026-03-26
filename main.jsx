import React from 'react';
import ListaDeTarefas from './App'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Tarefas</h1>
      </header>
      
      <main>
        <ListaDeTarefas />
      </main>

      <footer>
        <p>Estudo de Imutabilidade e Hooks</p>
      </footer>
    </div>
  );
}

export default App;