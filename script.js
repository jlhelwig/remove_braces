
function solve(s) {

  let z =s.split("");
  // console.log(z);
  const result=z.filter(x => x !== "(");
  // console.log(result);
  const final = result.filter(y => y !== ")");
 // console.log(final.join(''));
  return final.join('');
}
// solve("x-(y+z)")
