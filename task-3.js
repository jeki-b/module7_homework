function createBlankObject() {
    const emptyObj = Object.create(null);
    return emptyObj;
  }
  
  //Checking:
  const blankObject = createBlankObject();
  console.log(blankObject);
  