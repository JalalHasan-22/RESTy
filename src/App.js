import './App.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
import Form from './components/form/form.js';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();
  const [method, setMethod] = useState();
  function updateMethod(e) {
    setMethod(e.target.value);
  }
  function onSubmit(url) {
    let mockResults;
    if (method) {
      mockResults = `${method} ${url}`;
    } else {
      mockResults = 'please choose the correct method';
    }
    setResult(mockResults);
  }
  function updateMethod(e) {
    setMethod(e.target.value);
  }
  return (
    <>
      <Header />
      <Form onSubmit={onSubmit} updateMethod={updateMethod} />
      <Results mockResults={result || ''} />
      <Footer />
    </>
  );
}

export default App;
