import './App.css';
import {useEffect, useState} from "react";

const InitialCell = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
function App() {
    const [cell, setCell] = useState(InitialCell)

    const [count, setCount ] = useState(0)

    useEffect(() => {
        check()
    },[cell])

    const check = () => {
        console.log("CHECK")
        if(cell[0] === "O" && cell[1] === "O" && cell[2] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[3] === "O" && cell[4] === "O" && cell[5] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[6] === "O" && cell[7] === "O" && cell[8] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[0] === "O" && cell[3] === "O" && cell[6] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[1] === "O" && cell[4] === "O" && cell[7] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[2] === "O" && cell[5] === "O" && cell[8] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[0] === "O" && cell[4] === "O" && cell[8] === "O") {
            alert("빙고")
            reset()
        }
        if(cell[2] === "O" && cell[4] === "O" && cell[6] === "O") {
            alert("빙고")
            reset()
        }

    }

    const reset = () => {
        setCell(InitialCell)
    }

    const onClick = (index) => {

        const resultCell = [...cell]

        if(resultCell[index] === "X"){
            resultCell[index] = "O"
        }
        else {
            resultCell[index] = "X"
        }

        setCell(resultCell)
    }

  return (
    <div className="App">
        <div>
            <button onClick={() => onClick(0)}>{cell[0]}</button>
            <button onClick={() => onClick(1)}>{cell[1]}</button>
            <button onClick={() => onClick(2)}>{cell[2]}</button>
        </div>
        <div>
            <button onClick={() => onClick(3)}>{cell[3]}</button>
            <button onClick={() => onClick(4)}>{cell[4]}</button>
            <button onClick={() => onClick(5)}>{cell[5]}</button>
        </div>
        <div>
            <button onClick={() => onClick(6)}>{cell[6]}</button>
            <button onClick={() => onClick(7)}>{cell[7]}</button>
            <button onClick={() => onClick(8)}>{cell[8]}</button>
        </div>
        <div>
            <button onClick={() => setCount(count - 1)}>
            [-]
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>
                [+]
            </button>
        </div>
    </div>
  );
}

export default App;
