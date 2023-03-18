import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Main from './components/Main'

function App() {
  return (
    <div>
      <Header />
      <Main />
      </div>
  );
}

export default App;
