const bestMove = (state, item, available) => {
    ///////////////// computer's turn ////////////////////////
    // row 1
    if(state[4]===null){
        item = 4;
      }
      else if(state[0]=== 'O' && state[1]=== 'O' && state[2]===null){
        item = 2;
      }
      else if(state[1]=== 'O' && state[2]==='O' && state[0]===null){
        item = 0;
      }
      else if(state[0]=== 'O' && state[2]==='O' && state[1]===null){
        item = 1;
      }
  
      // row 2
      else if(state[3]=== 'O' && state[4]=== 'O' && state[5]===null){
        item = 5;
      }
      else if(state[4]=== 'O' && state[5]==='O' && state[3]===null){
        item = 3;
      }
      else if(state[3]=== 'O' && state[5]==='O' && state[4]===null){
        item = 4;
      }
  
      // row 3
      else if(state[6]=== 'O' && state[7]=== 'O' && state[8]===null){
        item = 8;
      }
      else if(state[7]=== 'O' && state[8]==='O' && state[6]===null){
        item = 6;
      }
      else if(state[6]=== 'O' && state[8]==='O' && state[7]===null){
        item = 7;
      }
  
      // col 1
      else if(state[0]=== 'O' && state[3]=== 'O' && state[6]===null){
        item = 6;
      }
      else if(state[0]=== 'O' && state[6]==='O' && state[3]===null){
        item = 3;
      }
      else if(state[3]=== 'O' && state[6]==='O' && state[0]===null){
        item = 0;
      }
  
      // col 2
      else if(state[1]=== 'O' && state[4]=== 'O' && state[7]===null){
        item = 7;
      }
      else if(state[1]=== 'O' && state[7]==='O' && state[4]===null){
        item = 4;
      }
      else if(state[4]=== 'O' && state[7]==='O' && state[1]===null){
        item = 1;
      }
  
      // col 3
      else if(state[2]=== 'O' && state[5]=== 'O' && state[8]===null){
        item = 8;
      }
      else if(state[2]=== 'O' && state[8]==='O' && state[5]===null){
        item = 5;
      }
      else if(state[5]=== 'O' && state[8]==='O' && state[2]===null){
        item = 2;
      }
  
      // diagonal 1
      else if(state[0]=== 'O' && state[4]=== 'O' && state[8]===null){
        item = 8;
      }
      else if(state[0]=== 'O' && state[8]==='O' && state[4]===null){
        item = 4;
      }
      else if(state[4]=== 'O' && state[8]==='O' && state[0]===null){
        item = 0;
      }
  
      // diagonal 2
      else if(state[2]=== 'O' && state[4]=== 'O' && state[6]===null){
        item = 6;
      }
      else if(state[2]=== 'O' && state[6]==='O' && state[4]===null){
        item = 4;
      }
      else if(state[6]=== 'O' && state[4]==='O' && state[2]===null){
        item = 2;
      }
  
  
      //////////////////// counter of 'X' //////////////////////
      // row 1
      else if(state[0]=== 'X' && state[1]=== 'X' && state[2]===null){
        item = 2;
      }
      else if(state[1]=== 'X' && state[2]==='X' && state[0]===null){
        item = 0;
      }
      else if(state[0]=== 'X' && state[2]==='X' && state[1]===null){
        item = 1;
      }
  
      // row 2
      else if(state[3]=== 'X' && state[4]=== 'X' && state[5]===null){
        item = 5;
      }
      else if(state[4]=== 'X' && state[5]==='X' && state[3]===null){
        item = 3;
      }
      else if(state[3]=== 'X' && state[5]==='X' && state[4]===null){
        item = 4;
      }
  
      // row 3
      else if(state[6]=== 'X' && state[7]=== 'X' && state[8]===null){
        item = 8;
      }
      else if(state[7]=== 'X' && state[8]==='X' && state[6]===null){
        item = 6;
      }
      else if(state[6]=== 'X' && state[8]==='X' && state[7]===null){
        item = 7;
      }
  
      // col 1
      else if(state[0]=== 'X' && state[3]=== 'X' && state[6]===null){
        item = 6;
      }
      else if(state[0]=== 'X' && state[6]==='X' && state[3]===null){
        item = 3;
      }
      else if(state[3]=== 'X' && state[6]==='X' && state[0]===null){
        item = 0;
      }
  
      // col 2
      else if(state[1]=== 'X' && state[4]=== 'X' && state[7]===null){
        item = 7;
      }
      else if(state[1]=== 'X' && state[7]==='X' && state[4]===null){
        item = 4;
      }
      else if(state[4]=== 'X' && state[7]==='X' && state[1]===null){
        item = 1;
      }
  
      // col 3
      else if(state[2]=== 'X' && state[5]=== 'X' && state[8]===null){
        item = 8;
      }
      else if(state[2]=== 'X' && state[8]==='X' && state[5]===null){
        item = 5;
      }
      else if(state[5]=== 'X' && state[8]==='X' && state[2]===null){
        item = 2;
      }
  
      // diagonal 1
      else if(state[0]=== 'X' && state[4]=== 'X' && state[8]===null){
        item = 8;
      }
      else if(state[0]=== 'X' && state[8]==='X' && state[4]===null){
        item = 4;
      }
      else if(state[4]=== 'X' && state[8]==='X' && state[0]===null){
        item = 0;
      }
  
      // diagonal 2
      else if(state[2]=== 'X' && state[4]=== 'X' && state[6]===null){
        item = 6;
      }
      else if(state[2]=== 'X' && state[6]==='X' && state[4]===null){
        item = 4;
      }
      else if(state[6]=== 'X' && state[4]==='X' && state[2]===null){
        item = 2;
      }
      else {
        const randomIndex = Math.floor(Math.random() * available.length);
        item = available[randomIndex];
      }
      return item;
}

export default bestMove;