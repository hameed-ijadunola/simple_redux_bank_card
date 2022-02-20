export function withdrawal(amount) {
 return {
  type: 'WITHDRAWAL',
  amount: amount,
 }
}
export function charity() {
 return {
  type: 'CHARITY',
  amount: 0,
 }
}