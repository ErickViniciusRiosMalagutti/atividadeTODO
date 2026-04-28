import React, { useState } from 'react';
import Botao from './botao';

function TodoList() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false }
  ]);
  const [inputTexto, setInputTexto] = useState("");

  function adicionarTarefa() {
    if (inputTexto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: inputTexto,
      feita: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setInputTexto(""); 
  }

  function alternarStatus(id) {
    const listaAtualizada = tarefas.map(function(tarefa) {
      if (tarefa.id === id) {
        return { ...tarefa, feita: !tarefa.feita };
      }
      return tarefa;
    });
    setTarefas(listaAtualizada);
  }

  function removerTarefa(id) {
    const listaFiltrada = tarefas.filter(function(tarefa) {
      return tarefa.id !== id;
    });
    setTarefas(listaFiltrada);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Minha Lista de Tarefas</h1>

      <div>
        <input 
          type="text" 
          value={inputTexto} 
          onChange={function(e) { setInputTexto(e.target.value) }}
          placeholder="O que precisa ser feito?"
        />
        <Botao onClick={adicionarTarefa}>Adicionar</Botao>
      </div>

      <ul>
        {tarefas.map(function(tarefa) {
          return (
            <li key={tarefa.id} style={{ marginTop: '10px' }}>
              <input 
                type="checkbox" 
                checked={tarefa.feita} 
                onChange={function() { alternarStatus(tarefa.id) }} 
              />
              
              <span style={{ textDecoration: tarefa.feita ? 'line-through' : 'none', margin: '0 10px' }}>
                {tarefa.texto}
              </span>

              <Botao onClick={function() { removerTarefa(tarefa.id) }}>
                Remover
              </Botao>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;