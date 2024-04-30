import { useMemo } from "react"
import { useState } from "react"

function App() {

  const [text, setText] = useState('')

  const [list, setList] = useState([{
    id: Date.now(),
    status: false,
    description: "text"
  }])

  const handleAddItem = () => {
    setList(prevState => [{
      id: Date.now(),
      status: false,
      description: text
    }, ...prevState])

    setText('')
  }

  const concluidas = useMemo(() => {
    return list.filter(item => item.status === true).length;
  }, [list]);

  const criadas = useMemo(() => {
    return list.filter(item => item.status === false).length;
  }, [list]);

  const handleDeleteItem = (id) => {
    if (confirm('Deseja realmente excluir essa tarefa?')) {
      const novoArray = list.filter(item => item.id !== id);
      setList(novoArray);
    }
  };

  const handleUpdateStatus = (id) => {
    const novoArray = list.map(item => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setList(novoArray);
  };

  return (
    <main className="w-full flex flex-col items-center">
      <div className="relative w-full bg-black h-52 flex flex-col items-center justify-center">
        <img src="Logo.png" alt="Logo" />
        <div className="max-w-[420px] w-full flex gap-2 absolute bottom-[-24px]">
          <input
            className="bg-gray-800 p-3 focus:outline-2 focus:outline-purple-600 rounded-md w-full text-white placeholder:text-gray-400"
            type="text"
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={handleAddItem} className="h-12 w-14 rounded-md flex items-center justify-center bg-cyan-600 transition-all hover:bg-cyan-400">
            <img src="plus.png" alt="add" />
          </button>
        </div>
      </div>
      <div className="py-8 h-screen w-full flex flex-col items-center bg-gray-900">
        <div className="w-full my-4 max-w-[420px] flex flex-row justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-cyan-500 font-bold">Criados</p>
            <p className="bg-gray-600 px-2 rounded-full font-bold text-white">{criadas}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-purple-700 font-bold">Concluídos</p>
            <p className="bg-gray-600 px-2 rounded-full font-bold text-white">{concluidas}</p>
          </div>
        </div>

        <div className="h-[1px] w-full max-w-[420px] bg-gray-700 mb-4"></div>
        {
          list.length === 0 ? (
            <div className="flex flex-col my-20 items-center">
              <img src="Clipboard.png" alt="nodata" className='h-18 w-18 mb-4' />
              <p className="text-md font-bold text-gray-600">Você ainda não tem tarefas cadastradas</p>
              <p className="text-md text-gray-600">Crie tarefas e organize seus items a fazer</p>
            </div>
          ) : null
        }

        {
          list.length > 0 && list.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between gap-4 bg-gray-800 border-2 border-gray-700 rounded-md w-full max-w-[420px] my-2 p-4"
            >

              <div class="inline-flex items-center">
                <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  for="checkbox-8"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-cyan-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                    id="checkbox-8"
                    checked={item.status}
                    onClick={() => handleUpdateStatus(item.id)}
                  />
                  <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
              </div>
              <p data-status={item.status} className="flex-1 text-white data-[status=true]:text-gray-500 data-[status=true]:line-through">{item.description}</p>
              <button onClick={() => handleDeleteItem(item.id)}>
                <img className="w-10 h-10" src="trash.png" alt="excluir" />
              </button>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default App
