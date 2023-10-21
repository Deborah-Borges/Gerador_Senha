import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './Tema.css'

function App() {

  //temas
  const temas = {
    claro: {
      corFundo: 'white',
      corTexto: 'black',
    },
    escuro: {
      corFundo: 'black',
      corTexto: 'white',
    },
  };

  const TemaContext = React.createContext();

  function AlternarTemaButton() {
    const { setTema, tema } = useContext(TemaContext);
  
    const alternarTema = () => {
      setTema(tema === 'claro' ? 'escuro' : 'claro');
    };
  
    return <button onClick={alternarTema}>Alternar Tema</button>;
  }

  const StyledElemento = styled.div`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
  padding: 10px;
`;

const [tema, setTema] = React.useState('claro');

return (
    <ThemeProvider theme={temas[tema]}>
      <TemaContext.Provider value={{ tema, setTema }}>
        <div>
          <AlternarTemaButton />
          <StyledElemento>Texto com Estilo</StyledElemento>
        </div>
      </TemaContext.Provider>
    </ThemeProvider>
  );

}

export default App