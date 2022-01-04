import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/countNumber/Index'

type State = {number: number}

class App extends React.Component<{}, State> {

  constructor(props: string) {
    super(props);

    this.handleUpNumber = this.handleUpNumber.bind(this);
    this.handleDownNumber = this.handleDownNumber.bind(this);
  }

  state: State = { 
    number: 29,
   }
  
  handleUpNumber() {
    this.setState((value) => ({
      number: value.number + 1
    }))
  }

  handleDownNumber() {
    this.setState((value) => ({
      number: value.number - 1
    }))
  }

  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React! bellow is demo increment/decrement application</p>
          <Counter
            decrement = {this.handleDownNumber} 
            number = {number}  
            increment = {this.handleUpNumber}       
          />
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    )
  }
}

export default App

