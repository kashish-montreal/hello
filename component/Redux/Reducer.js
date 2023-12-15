let inital=[];


export const nameReducer=(state=inital,action)=>{
    if(action.type=="ADD")
    {
      state= [
        ...state,
        state=action.name
       ]
        
    }
    else if(action.type =="DELETE"){
        let arr=state.filter((el,i)=>{
                return el.id!==action.name;
        })
        state=[
            ...arr
        ]
    }
    return state
    
}