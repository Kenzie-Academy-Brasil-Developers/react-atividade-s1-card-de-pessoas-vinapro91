import './App.css';
import { Developer } from './components/Developer';


function App() {
  const pessoas = [
    {
    dev: 'Vinicius',
    age: 29,
    country: 'Brasil'
  },
  {
    dev: 'Carol',
    age: 18,
    country: 'França'
  },
  {
    dev: 'Felipe',
    age: 27,
    country: 'Belgica'
  }

  ]
   
  return (
    <div className="App">
      <header className="App-header">
       <Developer name={pessoas[0].dev} age={pessoas[0].age} country={pessoas[0].country}/>
       <Developer name={pessoas[1].dev} age={pessoas[1].age} country={pessoas[1].country}/>
       <Developer name={pessoas[2].dev} age={pessoas[2].age} country={pessoas[2].country}/>
      </header>
    </div>
  );
}

export default App;
