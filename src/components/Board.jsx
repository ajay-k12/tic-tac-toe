import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import Winner from './Winner';
import Draw from './Draw';
import ScoreBoard from './ScoreBoard';
import bestMove from './bestMove';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [winnerName, setWinnerName] = useState("");
  const [isAllFill, setIsAllFill] = useState(false);
  const [Xwins, setXwins] = useState(0);
  const [Owins, setOwins] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  let count = 9;

  const compTern = () => {
    let item
    const copyState = [...state];
    let available = [];
    for(let i=0; i<9; i++){
      if(copyState[i]===null){
        available.push(i);
      }
    }
    // calling function bestMove for computer...
    item = bestMove(state, item, available);
    copyState[item] = 'O';
    setState(copyState)
    setIsXTurn(true);
  }


  const handleClick = (index) => {
    const copyState = [...state];
    if(copyState[index]===null){
      copyState[index] = 'X'
      setState(copyState);
      setIsXTurn(false);
    }
  }

  const isWin = () => {
    let winner = null;
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for(let item of arr){
      const [a, b, c] = item;
      if(state[a] != null && state[a] === state[b] && state[a] === state[c]){
        setIsWinner(true);
        setWinnerName(state[a]);
        setIsDisable(true);
        setIsXTurn(true);
        if(state[a] === 'X'){
          setXwins(Xwins => Xwins+1)
        }
        else if(state[a] === 'O'){
          setOwins(Owins => Owins+1)
        }
        winner = state[a];
      }
    }
    let openSpots = 0;
    for(let i=0; i<9; i++){
      if(state[i] === null){
        openSpots++;
      }
    }
    if(winner==null && openSpots===0){
      return 'tie';
    }
    else {
      return winner;
    }
  }

  const isMatchDraw = () => {
    for(let i=0; i<9; i++){
      if(state[i] !== null){
        count--;
      }
      if(count === 0){
        setIsAllFill(true);
        setIsDisable(true);
      }
    }
  }

  const spaceLeft = () => {
    for(let i=0; i<9; i++){
      if(state[i] === null){
        return false;
      }
      return true;
    }
  }

  useEffect(() => {
    if(spaceLeft()){
      isMatchDraw();
    }
    if(winnerName===""){
      isWin();
    }

    setTimeout(() => {
      if(isXTurn===false && winnerName===""){
        compTern();
      }
    }, 500)
    // eslint-disable-next-line
  }, [state])

  const nextRound = () => {
    setState(Array(9).fill(null));
    setIsDisable(false);
    setIsWinner(false);
    setIsAllFill(false);
    setWinnerName("");
  }

  return (
    <div className='body'>
      
      <div className='container'>
        <div className={isDisable ? 'board is-disabled' : 'board'}>
          <div className='board-row'>
            <Cell value={state[0]} onClick={() => handleClick(0)} />
            <Cell value={state[1]} onClick={() => handleClick(1)} />
            <Cell value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className='board-row'>
            <Cell value={state[3]} onClick={() => handleClick(3)} />
            <Cell value={state[4]} onClick={() => handleClick(4)} />
            <Cell value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className='board-row'>
            <Cell value={state[6]} onClick={() => handleClick(6)} />
            <Cell value={state[7]} onClick={() => handleClick(7)} />
            <Cell value={state[8]} onClick={() => handleClick(8)}/>
          </div>
        </div>
        <div className='right-side'>
          <ScoreBoard Xwins={Xwins} Owins={Owins}/>
          <button className='next-game' onClick={nextRound}>Next Round</button>
        </div>
      </div>
      {isWinner && <Winner winner={winnerName} />}
      {(isAllFill && !isWinner) && <Draw />}
    </div>
  )
}

export default Board