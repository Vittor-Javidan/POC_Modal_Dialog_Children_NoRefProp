import React, { useState, Suspense, lazy } from 'react';
import './App.css';

const Modal = lazy(() => import('./components/Modal')) // Lazy import

export default function App() {

  const [amount, setAmount] = useState(10)
  const [showModal, setShowModal] = useState(false)
  function openModal() { setShowModal(true) }
  function closeModal() { setShowModal(false) }
  function onChange(e) { setAmount(e.target.value) }
  
  return (
    <div className="App">

      <div>
        <label
          htmlFor='input'
        >
          <span>Inputs Amount</span>
          <input 
            id='input'
            placeholder='Amount of buttons'
            value={amount}
            onChange={onChange}
          />
        </label>
      </div>
      
      <ButtonsArray
        amount={Number(amount) ? Number(amount) : 0}
        onClick={openModal}
      />
      

      {showModal && (
        <Suspense>
          <Modal
            onPressEsc={closeModal}
          >
            <button
              onClick={closeModal}
            >
              fechar modal
            </button>
          </Modal>
        </Suspense>
      )}
    </div>
  );
}

function ButtonsArray({amount, onClick}) {
  const buttonsArray = []
  for(let i = 0; i < amount; i++) {
    buttonsArray.push(
      <button 
        key={i}
        onClick={onClick}
      >
        open modal
      </button>
    )
  }
  return (<div>
    {buttonsArray}
  </div>)
}