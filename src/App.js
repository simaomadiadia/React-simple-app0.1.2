
import { useState, useEffect } from "react"




//propriedades
function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'limpar o chão',
     'Arrumar a cozinha'
    ]);

    useEffect(() => {
      const tarefasLocalStorage = localStorage.getItem('@minhasTarefas');
      if (tarefasLocalStorage) {
        setTarefas(JSON.parse(tarefasLocalStorage))
       
      }
    }, [])

  useEffect(() => {
    localStorage.setItem('@minhasTarefas', JSON.stringify(tarefas))
  },[tarefas])


  function registar(e) {
    e.preventDefault();
    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <form onSubmit={registar}>
        <label>Tarefa</label><br />
        <input placeholder="Indira tarefa" value={input} onChange={(e) => { setInput(e.target.value) }}></input><br />
        <button type="submit"> Cadastrar</button><br />
      </form>
      <br></br>
      <ul>
        {tarefas.map(item => (
          <li key={item}>{item}</li>
        )
        )}
      </ul>

    </div>
  );
}

export default App;
