import *as React from 'react'

function getTitle(title){
  return title;
}

function App() {

  return (
    <div>
      <div>
        <h1>NOOKNICK {getTitle('React')}</h1>

        <label htmlFor='search'>Search : </label>
        <input type='text' id='search'></input>
      </div>
    </div>
  )
}

export default App