// https://www.freecodecamp.com/challenges/using-objects-for-lookups#?solution=%0A%2F%2F%20Setup%0Afunction%20phoneticLookup(val)%20%7B%0A%20%20var%20result%20%3D%20%22%22%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line%0A%20%20switch(val)%20%7B%0A%20%20%20%20case%20%22alpha%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Adams%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20%22bravo%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Boston%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20%22charlie%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Chicago%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20%22delta%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Denver%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20%22echo%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Easy%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20%22foxtrot%22%3A%20%0A%20%20%20%20%20%20result%20%3D%20%22Frank%22%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line%0A%20%20return%20result%3B%0A%7D%0A%0A%2F%2F%20Change%20this%20value%20to%20test%0AphoneticLookup(%22charlie%22)%3B%0A

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
