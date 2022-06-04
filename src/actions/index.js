export const checkBox = (number,player) =>{
    return {
        type:'BOX_CLICKED',
        payload:{
            number:number,
            player:player
        }
    };
};