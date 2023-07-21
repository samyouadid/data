function sumOfDistinctElements(set1, set2) {
    let distinctElements = new Set();
  
  
    for (let element of set1) {
      if (!distinctElements.has(element)) {
        distinctElements.add(element);
      }
    }
  
   
    for (let element of set2) {
      if (!distinctElements.has(element)) {
        distinctElements.add(element);
      }
    }
  
    let sum = 0;


  
    
    for (let element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }

  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log(result); 






  //problem2
  function dot_product(vector1, vector2, ps) {
    ps = 0;
    for (let i = 0; i < vector1.length; i++) {
      ps += vector1[i] * vector2[i];
    }
  }
  
  function check_orthogonal_with_procedure(vectors1, vectors2) {
    for (let k = 0; k < vectors1.length; k++) {
      let result = 0;
      dot_product(vectors1[k], vectors2[k], result);
      if (result === 0) {
        console.log(`Vectors [${vectors1[k]}] and [${vectors2[k]}] are orthogonal.`);
      } else {
        console.log(`Vectors [${vectors1[k]}] and [${vectors2[k]}] are NOT orthogonal.`);
      }
    }
  }
  