// const num = parseInt(prompt("enter the num of terms"));

// let n1 = 0, n2 = 1, count;

// console.log('F series ');

// for (let index = 1; index <= num; index++) {

//   console.log(n1);
//   count = n1 + n2;
//   n1 = n2;
//   n2 = count;
  
// }

//  const num = parseInt(prompt("enter the num of terms"));

for (let index = 1; index < 30; index++) {
  
  if (index % 3 == 0 || index % 5 ==0 ) {
    // console.log(index, "BUZZ");
    if (index % 3 == 0 && index % 5 == 0) {
      console.log(index, "FIZZBUZZ");
          }
    else if (index % 5 == 0) {
       console.log(index, "BUZZ");
     } else {
       console.log(index, "FIZZ");
    }
  } 
   else {
    console.log(index, "no division");
  }


}
