export default (state, action) => {
 switch (action.type){
  case 'WITHDRAWAL':
   console.log(action.amount)
   const oldb = state.balance
   return {
    ...state,
    balance: oldb - action.amount
   }
  case 'CHARITY':
   console.log(state.balance);
   return {
    ...state,
    balance: 0
   }
  default:
   return state
 }
 
}