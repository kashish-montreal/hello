let inital="Datatata";


export const nameReducer=(state=inital,action)=>{
    if(action.type=="ADDD")
    {
        state=action.name
    }
    return state
}