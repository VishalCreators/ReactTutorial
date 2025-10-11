import React, { useState } from 'react'

function App() {

  const [text,setText]=useState("")

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(text)
    setText("")
  }

  return (
    <div>
      <h1 className="text-3xl text-center bg-amber-300 font-bold p-2">
        Form Handler
      </h1>
      <div className='flex justify-center items-center h-[90vh]'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col justify-center w-[350px] h-[400px] bg-black/20 border-2 border-amber-400 rounded-4xl shadow-2xl shadow-black/80'>
          <input 
            type='text'
            value={text}
            onChange={(e)=>{
              setText(e.target.value)
            }} 
            placeholder='Enter text...' 
            className='bg-white border-2 border-amber-400 shadow-xl shadow-amber-600/50 rounded-3xl mx-6 mb-10 p-2'
          />
          <button className='bg-amber-500 text-white border-2 border-amber-400 shadow-xl shadow-amber-600/50 font-bold rounded-2xl p-2 mx-6'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
