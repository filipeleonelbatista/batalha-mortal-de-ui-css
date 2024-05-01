import { useMemo, useState } from "react";
import * as S from "./styled";

function App() {
  const [text, setText] = useState('')

  const [list, setList] = useState([])

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
    <S.Main>
      <S.Header>
        <S.Image src="Logo.png" alt="Logo" />
        <S.InputGroup>
          <S.Input
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder="Adicione uma nova tarefa"
          />
          <S.Button onClick={handleAddItem} >
            <S.Image src="plus.png" alt="add" />
          </S.Button>
        </S.InputGroup>
      </S.Header>
      <S.Content>
        <S.Container>
          <S.CounterRow>
            <S.CounterGroup>
              <S.CounterLabel>Criadas</S.CounterLabel>
              <S.Counter>{criadas}</S.Counter>
            </S.CounterGroup>
            <S.CounterGroup>
              <S.CounterLabel variant="secondary">Concluídas</S.CounterLabel>
              <S.Counter>{concluidas}</S.Counter>
            </S.CounterGroup>
          </S.CounterRow>
          <S.Divider />

          {
            list.length === 0 ? (
              <S.EmptyContainer>
                <S.Image width="80" style={{ marginBottom: 10 }} src="Clipboard.png" alt="add" />
                <S.P font="bold">Você ainda não tem tarefas cadastradas</S.P>
                <S.P>Crie tarefas e organize seus itens a fazer</S.P>
              </S.EmptyContainer>
            ) : null
          }

          {
            list.length > 0 && list.map((item) => (
              <S.Card
                key={item.id}
              >
                <S.CheckboxContainer>
                  <S.CheckboxInput
                    checked={item.status}
                    onClick={() => handleUpdateStatus(item.id)}
                  />
                </S.CheckboxContainer>
                <S.Description status={item.status}>
                  {item.description}
                </S.Description>
                <S.CardButton onClick={() => handleDeleteItem(item.id)}>
                  <S.Image src="trash.png" alt="trash" />
                </S.CardButton>
              </S.Card>
            ))
          }
        </S.Container>
      </S.Content>
    </S.Main>
  )
}

export default App;
