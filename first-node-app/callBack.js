const myRequest = (data, callback)=>{
  const response = 10 + data;
  const error = undefined;
  const result = callback(error, response);
  return  result;
}

// const myCallBack = (error, res) =>{
//   if (error) {
//     return 'You have got Error.';
//   } else {
//     return res;
//   }
// }

// const result = myRequest(5, myCallBack);


const result = myRequest(5, (error, res)=>{
  if (error){
    return 'You have got Error';
  } else {
    return res;
  }
});

console.log(result);