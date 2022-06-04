import { combineReducers } from "redux";


const currentPlayerReducer = (player=1,action)=>{
    if(action.type==='BOX_CLICKED'){
        if(action.payload.player===1){
            console.log('Action player',action.payload.player);
            return 2;}
        else{
            return 1;
        }
    }
    return player;
}

const boxClickedReducer = (board=[['','',''],['','',''],['','','']],action) =>{
        if(action.type==='BOX_CLICKED'){
            console.log('Action payload',action.payload);
            let boxNumber =  action.payload.number;
            let player = action.payload.player;
            switch(player){
                case 1:
                    switch(boxNumber){
                        case 1:
                            board[0][0]='X';
                            break;
                        case 2:
                            board[0][1]='X';
                            break;
                        case 3:
                            board[0][2]='X';
                            break;
                        case 4:
                            board[1][0]='X';
                            break;
                        case 5:
                            board[1][1]='X';
                            break;
                        case 6:
                            board[1][2]='X';
                            break;
                        case 7:
                            board[2][0]='X';
                            break;
                        case 8:
                            board[2][1]='X';
                            break;
                        case 9:
                            board[2][2]='X';
                            break;
                    }
                    console.log("returning board");
                    return [...board];
                case 2:
                    switch(boxNumber){
                        case 1:
                            board[0][0]='O';
                            break;
                        case 2:
                            board[0][1]='O';
                            break;
                        case 3:
                            board[0][2]='O';
                            break;
                        case 4:
                            board[1][0]='O';
                            break;
                        case 5:
                            board[1][1]='O';
                            break;
                        case 6:
                            board[1][2]='O';
                            break;
                        case 7:
                            board[2][0]='O';
                            break;
                        case 8:
                            board[2][1]='O';
                            break;
                        case 9:
                            board[2][2]='O';
                            break;
                    }
                    return [...board];
            }
            return board;
        }
        return board;
};

export default combineReducers({
    box:boxClickedReducer,
    player:currentPlayerReducer
});
