
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
 result = myObj[checkProp];
  return result;
  }
  else {
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
