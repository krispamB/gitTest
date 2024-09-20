// function h1ChgFn() {
//   let heading1 = document.querySelector('h1')
//   heading1.textContent = 'GFG'
// }

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (error) => console.error(error)
)
