import React from "react"
import Form from "./Components/Form"
import "./App.css"

function App() {

  return (
    <div className="container">
      <header>
       <h1>Expense Tracker</h1>
       <p>Track your expences with ease.<br />
       This application helps you stay organised and stay in controll of your finances</p>
       </header>
       <div className="content">
       <Form />
       </div>
       <footer className="footer">
              2025 Fahiye Muhammad. All rights reserved.
       </footer>
    </div>
  )
}

export default App
