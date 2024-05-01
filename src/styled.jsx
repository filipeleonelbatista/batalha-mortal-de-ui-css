import styled from 'styled-components'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.div`
  background-color: #000000;
  height: 200px;
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
`

const Image = styled.img``

const InputGroup = styled.div`
  position: absolute;
  bottom: -24px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
const Input = styled.input`
  width: 100%;
  background-color: #262626;
  color: white;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #262626;
  outline: none;

  &::placeholder {
    color: #808080;
  }

  &:focus {
    outline: solid 2px #5E60CE;
  }
`
const Button = styled.button`
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  border:none;
  background-color: #4EA8DE;
  transition: all 0.3s;

  &:hover{
   filter: contrast(1.3);
  }
`
const Content = styled.div`
  background-color: #191919;
  height: 100%;
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
`
const Container = styled.div`
  max-width:420px;
  width: 100%;  
  display: flex;
  flex-direction: column;
`
const CounterRow = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const CounterGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items:center;
`
const Counter = styled.p`
  color: white;
  font-weight: bold;
  padding: 1px 8px;
  border-radius: 20px;
  background-color: #333333;
`
const CounterLabel = styled.p`
  font-weight: bold;
  color: ${props => props.variant == 'secondary' ? '#8284FA' : '#4EA8DE'};
`
const Divider = styled.div`
  max-width:420px;
  width: 100%;  
  height: 1px;
  background-color: #333333;
  margin: 22px 0px;
`
const EmptyContainer = styled.div`
  max-width:420px;
  width: 100%;  
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items:center;
`
const P = styled.p`
  text-align: center;
  color: #808080;
  font-weight: ${props => props.font == 'bold' ? 'bold' : 'normal'};
`
const Card = styled.div`
  border: 2px solid #333333;
  border-radius: 8px;
  background-color: #262626;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 100%;
  justify-content:space-between;
  gap: 16px;
  margin: 4px 0;
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  outline: none;
  border: 2px solid ${({ checked }) => (checked ? '#8284FA' : '#4EA8DE')}; 
  background-color: ${({ checked }) => (checked ? '#8284FA' : 'transparent')};
  position: relative;
  cursor: pointer;

  &:after {
    content: '\\2713'; 
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ checked }) => (checked ? '#FFFFFF' : 'transparent')};
    opacity: ${({ checked }) => (checked ? 1 : 0)}; 
  }
`;
const Description = styled.p`
  flex:1;
  color:${props => props.status ? '#808080' : '#FFFFFF'};
  text-decoration-line:${props => props.status ? 'line-through' : 'none'};
`
const CardButton = styled.button`  
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  background:transparent;
  border:none;
  cursor:pointer;
`

export {
  Main,
  Button,
  Image,
  Input,
  InputGroup,
  Header,
  Content,
  Container,
  Counter,
  CounterLabel,
  CounterRow,
  CounterGroup,
  EmptyContainer,
  P,
  Divider,
  Card,
  CheckboxContainer,
  CheckboxInput,
  Description,
  CardButton,
}