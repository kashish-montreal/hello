export const nameAction=(name)=>{
  return{
   type:"ADD",
   name
  }     
}
export const deletAction=(name)=>{
   return {
      type:"DELETE",
      name
   }
}