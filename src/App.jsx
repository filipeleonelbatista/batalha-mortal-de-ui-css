import { Button, Checkbox, Divider, IconButton, OutlinedInput, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useMemo, useState } from "react";

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
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        component="main"
        sx={{
          width: "100%",
          backgroundColor: '#000000',
          height: 200,
          position: 'relative',
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          padding: 4,
        }}>
        <img src="/Logo.png" alt="logo" />
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: 'row',
            gap: 2,
            position: 'absolute',
            bottom: -24,
            paddingX: 4,
            maxWidth: '420px',
          }}>
          <OutlinedInput
            sx={{
              backgroundColor: '#262626',
              borderColor: '#2c2d3c',
              input: {
                color: '#d9d9d9',
              },
            }}
            onChange={(event) => setText(event.target.value)}
            value={text}
            color="secondary"
            fullWidth
            id="outlined-basic"
            placeholder="Adicione uma nova tarefa"
            variant="outlined"
          />
          <Button onClick={handleAddItem} variant="contained">
            <img src="/plus.png" alt="add" />
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          backgroundColor: '#191919',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: '420px',
            padding: 4,
            paddingTop: 6,
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginY: 1
            }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center'
              }}>
              <Typography fontWeight="bold" color="primary">
                Criadas
              </Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: "center",
                  backgroundColor: '#333333',
                  color: "#c3c3c3",
                  paddingX: 1,
                  borderRadius: 2,
                  fontWeight: "bold"
                }}
              >{criadas}</Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center'
              }}>
              <Typography fontWeight="bold" color="#8284FA">
                Concluídas
              </Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: "center",
                  backgroundColor: '#333333',
                  color: "#c3c3c3",
                  paddingX: 1,
                  borderRadius: 2,
                  fontWeight: "bold"
                }}
              >{concluidas}</Box>
            </Box>
          </Box>

          <Divider color="#292929" sx={{ marginTop: 2 }} />

          {
            list.length === 0 ? (
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: "center",
                  marginY: 8
                }}
              >
                <img src="/Clipboard.png" alt="no data" style={{ marginBottom: 16 }} />
                <Typography color="#808080" fontWeight="bold">Você ainda não tem tarefas cadastradas</Typography>
                <Typography color="#666666">Crie tarefas e organize seus items a fazer</Typography>
              </Box>
            ) : null
          }

          {
            list.length > 0 && list.map((item) => (
              <Box
                key={item.id}
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: "space-between",
                  backgroundColor: '#262626',
                  borderRadius: 2,
                  borderWidth: 2,
                  borderColor: '#2c2c2c',
                  marginY: 2,
                  padding: 1,
                }}
              >
                <Checkbox
                  checked={item.status}
                  onClick={() => handleUpdateStatus(item.id)}
                  sx={{
                    color: '#4EA8DE',
                    '&.Mui-checked': {
                      color: '#585ABD',
                    }
                  }}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                <Typography
                  sx={{
                    color: !item.status ? "#BFBFBF" : "#808080",
                    flex: 1,
                    textDecorationLine: !item.status ? 'none' : 'line-through'
                  }}>
                  {item.description}
                </Typography>
                <IconButton onClick={() => handleDeleteItem(item.id)}>
                  <img src="/trash.png" alt="lixo" />
                </IconButton>
              </Box>
            ))
          }
        </Box>

      </Box>

    </Box>
  )
}

export default App
