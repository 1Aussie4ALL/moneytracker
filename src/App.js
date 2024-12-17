import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const[description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault(); // Prevent page reload
    console.log(name, datetime, description);
  }
  

  return (
    
    <main>

      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>

        <div className="basic">
          <input type="text"
          onChange={ev => setName(ev.target.value)}
          placeholder={'+200 New Samsung phone'}/>

          <input value={datetime} 
          onChange={ev => setDatetime(ev.target.value)}
          type="datetime-local"/>

        </div>

        <div className="description">
          <input type="text" 
          onChange={ev => setDescription(ev.target.value)}
          placeholder={'description'}/>
        </div>

        <button type="submit"> Add new transaction </button>
        
      </form>

        <div className="transactions">

          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung phone</div>
              <div className="description">it was time for a new tv </div>
            </div>
            <div className="right">
              <div className="price red">-$200.00</div>
              <div className="datetime">2024-12-17</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">New client</div>
              <div className="description">it was time for a new tv </div>
            </div>
            <div className="right">
              <div className="price green">+$200.00</div>
              <div className="datetime">2024-12-17</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">iphone</div>
              <div className="description">it was time for a new tv </div>
            </div>
            <div className="right">
              <div className="price red">-$500.00</div>
              <div className="datetime">2024-12-17</div>
            </div>
          </div>

        </div>

    </main>
  );
}

export default App;
