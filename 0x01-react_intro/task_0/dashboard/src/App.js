import './App.css';
import logo from './holberton_logo.jpg'

function App() {
  return (
    <>
      <header className="App-header">
        <img className="Holberton-logo" src={logo} alt="holberton logo"/>
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer" >
        <p> Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;
