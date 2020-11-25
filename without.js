function without (source, itemsToRemove) {
  let newwArr = [...source];
  for (let i = 0; i <= newArr.length; i++) {
    for(let values of itemsToRemove){
      if(source[i] === values){
        let removedItem = newArr.indexOf(values);
        newArr.splice(removedItem, 1);
      }
    }
  }
  return newArr;
}