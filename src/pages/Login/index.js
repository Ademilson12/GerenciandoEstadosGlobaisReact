import {
  Button,
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles'

import {useHistory} from 'react-router-dom'

function Login({ nome, setNome, saldo, setSaldo }) {
  const history = useHistory()
  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
        type="number"
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/feira')}

      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;