let array = [1,2,3,4,5]
let posicao = array.length

function a(x){  
   return x[0]
}
// function b(x){
    
//     return x[posicao]
// }

a(array)
// b(array)

console.log(a(array))
console.log(array[posicao])

array.push(1)
console.log(array)