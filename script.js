
function solve(s) {
let counter =0
let finalString =[]
  let z =s.split("");
  // console.log(z);
  const result=z.filter(x => x !== "(");
  // console.log(result);
  const final = result.filter(y => y !== ")");
console.log(final);
let i=0
while(final[i]){
  if(final[i]==="-"){
    console.log('found a neg');
    counter++
    console.log(counter);
  }
  if (final[i]==='+'){
    console.log('found a pos');
  }
  if (final[i]!='-' && final[i]!='+') {
    console.log('not a pos or neg at index '+ i);
    if(counter%2!=0){
      finalString.push('-');
      finalString.push(final[i])

    }
    if (counter%2===0){
      finalString.push('+');
      finalString.push(final[i]);

    }
  }
  i++
}
if(finalString[0]==='+'){
  finalstring=finalString.shift();
}
console.log(finalString);
return finalString.join('');
console.log(finalString);
}








// console.log(0%2);  // return final.join('');

// solve("x-(y+z)")
// solve("a-(-b)");
// solve("(((((((((-((-(((n))))))))))))))");
// solve("(((((((m-(-(((((t)))))))))))))");
// solve("u+(g+v)+(r+t)");
// solve("(((a-((((-(-(f)))))))))")
solve("x-(-y-z)") // x+y+z
