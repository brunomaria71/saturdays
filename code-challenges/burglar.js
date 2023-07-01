const originalObject = {
  tim: 200,
};

let name = "kyle";
let value = 100;

function addObj(obj, name, value) {
  let newObj = { [name]: value };
  let burgler = Object.assign(obj, newObj);
  return burgler;
}

console.log(addObj(object, name, value));
// console.log(object);
