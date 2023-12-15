let count=0;


export const nameReducer=(state=count,action)=>{
    if(action.type=="ADD")
    {
        state=state+1
    }
    return state
}