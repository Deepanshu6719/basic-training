// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let max=-Infinity;
  let secondMax=-Infinity;
  for(let i=0;i<array.length;i++){
    if(array[i]>max){
      max=array[i];
    }else if(array[i]>secondMax && array[i]!=max){
      secondMax=array[i];
    }
  }
  return secondMax;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  let result={};
  for(let i=0;i<string.length;i++){
    let ch=string[i];
    let code=string.charCodeAt(i);
    if(code >=97 && code <=122){
      if(result[ch]===undefined){
        result[ch]=1;
      }else{
        result[ch]=result[ch]+1;
      }
    }
  }
  return result;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let result={};
  function helper(current,prefix){
    for(let key in current){
      let value=current[key];
      let newKey=prefix?prefix +"." +key:key;
      if(typeof value === "object" && value !== null)
        helper(value,newKey);
      else{
        result[newKey] = value;
      }
    }
  }
  helper(unflatObject,"");
  return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  let result={};
  for(let key in flatObject){
    let parts=key.split(".");
    let current = result;
    for(let i=0;i<parts.length;i++){
      let part=parts[i];
      let isLast = i === parts.length-1;
      
      if(isLast){
        current[part]=flatObject[key];
      }else{
        if(current[part]===undefined){
          let nextIsIndex=/^\d+$/.test(parts[i+1]);
          current[part]=nextIsIndex ? [] : {};
        }
        current=current[part];
      }
    }
  }return result;
}

