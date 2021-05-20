// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray: number[]): number {
  let x = 0 // elementos adjacentes começam como 0
  let y = 0
  let p = -Infinity // product

  for (let index = 0; index < inputArray.length; index++) {
    x = inputArray[index]; // pega elemento atual
    y = inputArray[index+1]; // pega elemento adjacente

    if (x * y > p) { // se a multiplicação deles for maior que p
      p = x * y // o valor de p agora será a multiplicação dos elementos, faz isso por todo array até terminar
    };    
  };

  return p; // o valor de p será o maior que teve em todo array
}
