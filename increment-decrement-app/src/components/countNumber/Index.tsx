import { MouseEventHandler } from "react"
import './Index.css'

export function Counter(Props: 
    { 
        decrement: MouseEventHandler<HTMLButtonElement>; 
        number: number; 
        increment: MouseEventHandler<HTMLButtonElement> 
    }): JSX.Element{
    return <div className="counter">
                <button 
                    onClick={Props.decrement} 
                    className="btn-decrement"
                >
                    - 
                </button>
                <span className="count-number">{Props.number}</span>
                <button 
                    onClick={Props.increment} 
                    className="btn-increment"
                > 
                    + 
                </button>
            </div>
}

  