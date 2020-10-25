
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix !== undefined){
    let newArray = [];
    for(let i = 0; i < matrix.length; i++){
        if(i % 2 === 0){
            if(Array.isArray(matrix[i])){
                newArray = [...newArray, ...matrix[i].sort((a,b) => a - b)];
            }
            else{
                newArray = [...matrix.sort((a,b) => a - b)]
            }
        }
        else{
            if(Array.isArray(matrix[i])){
                newArray = [...newArray, ...matrix[i].sort((a,b) => a - b).reverse()];
            }
            else{
                newArray = [...matrix.sort((a,b) => a - b).reverse()]
            }
        }
      continue;
    }
    return newArray;
}
return []
  }
