 
  // func takes 1 para (string)
  // return all consecutive....
    // empty array
    // loop controls starting pos of each substring
    // x start of a substring
    // starts at index 0(outer loop)
    // innner loop ending pos of the substring
    

function consecutiveSubstrings(string) {
  const result = []; 
  for (let x = 0; x < string.length; x++) { 
    // let temp =""
    //  for (let y = x; y < string.length; y++) {
    //   temp += string[y];
    //   result.push(temp);
    for (let y = x + 1; y <= string.length; y++) {
      result.push(string.substring(x, y));
    }
  }
  return result;
}
if (require.main === module) {
  console.log("in return: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("in return: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



