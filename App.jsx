import React, { useState } from 'react';

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const adicionarTarefa = () => {
    if (inputValue.trim() === '') return;

    const novaTarefa = {
      id: Date.now(), 
      texto: inputValue,
      feita: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setInputValue(''); 
  };

  const alternarStatus = (id) => {
    const listaAtualizada = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, feita: !tarefa.feita }; 
      }
      return tarefa; 
    });
    setTarefas(listaAtualizada);
  };

  const removerTarefa = (id) => {
    const listaFiltrada = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(listaFiltrada);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Minha Lista de Tarefas</h2>
      
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Digite uma tarefa..."
      />
      <Botao onClick={adicionarTarefa}>Adicionar</Botao>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
            <input 
              type="checkbox" 
              checked={tarefa.feita} 
              onChange={() => alternarStatus(tarefa.id)} 
            />
            
            <span style={{ textDecoration: tarefa.feita ? 'line-through' : 'none', margin: '0 10px' }}>
              {tarefa.texto}
            </span>

            <Botao onClick={() => removerTarefa(tarefa.id)}>Remover</Botao>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;