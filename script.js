// solve("x-(y+z)") = "x-y-z"
// solve("x-(y-z)") = "x-y+z"
// solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
// solve("x-(-y-z)") = "x+y+z"

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
