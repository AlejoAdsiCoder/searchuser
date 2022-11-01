import logo from './logo.svg';
import Formdata from './components/formdata/Formdata';
import { Container, TabContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Resume } from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Routes>
            <Route exact path='/' element={<Formdata />} />
            <Route path="/resume/:td/:ced" element={<Resume />} exact />
          </Routes>
        </Container>
      </header>
    </div>
  );
}

export default App;
