import logo from './logo.svg';
import Formdata from './components/formdata/Formdata';
import { Container, TabContainer } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Formdata />
        </Container>
      </header>
    </div>
  );
}

export default App;
