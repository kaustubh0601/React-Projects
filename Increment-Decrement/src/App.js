import './App.css';
import { useState } from 'react';

function App() {

    
  // eslint-disable-next-line no-lone-blocks
  {/* used state hooks */}
  const[count, setCount] = useState(0);   

  function decreaseHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='wrapper'>

        <div className='Heading'> Increment & Decrement</div>

        <div className='btn'>
          <button className='Nbtn' onClick={decreaseHandler}> - </button>
          <div className='content'> {count}</div>     
          <button className='Pbtn' onClick={incrementHandler}> + </button>
        </div>

        <button className='reset' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
