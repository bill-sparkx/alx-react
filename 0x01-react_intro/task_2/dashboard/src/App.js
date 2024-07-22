import './App.css';
import logo from './holberton_logo.jpg'
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img className="Holberton-logo" src={logo} alt="holberton logo"/>
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email</label>
        <input type='email' id='email'></input>
        <label htmlFor="passwd">Password</label>
        <input type='password' id='passwd'></input>
        <button id='ok-btn'>OK</button>
        
      </main>
      <footer className="App-footer" >
        <p> Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
