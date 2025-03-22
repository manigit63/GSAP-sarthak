// var ans = new Promise((res, rej) => {
//   var n = Math.floor(Math.random() * 10);

//   if (n < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// ans
//   .then(function () {
//     console.log("bellow");
//   })
//   .catch(function () {
//     console.log("above");
//   });

//-----------------------------------------------------

// var ans = new Promise(function (res, rej) {
//    res("ghr aao");
// });

// var p2  = ans.then(function (data) {
//   console.log(data);
//    return new Promise(function (res, rej) {
//      res("khana bnao");
//   });
// });

// var q2 = p2.then(function(data){
//   console.log(data);
//   return new Promise(function(res,rej){
//      res("khaa looo so jao")
//   })
  
// })


// var r2 = q2.then(function(data){
//   console.log(data);
//   return new Promise(function(res,rej){
//      res("utho kaam kro")
//   })
// })

//------------------------------------------------

//  jab aap async code likhte ho to promish fhir then lgaanaa pdega,,jise bachne k liye ap await k use kar sakte ho