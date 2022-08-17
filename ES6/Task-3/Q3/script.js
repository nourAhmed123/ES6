function checkInfo() {
  handler = {
    set: function (obj, prop, value) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = value;
      } else {
        throw `prop ${prop} is not allowed in this object`;
      }
      if (prop == "name") {
        if (value.length < 7) obj[prop] = document.getElementById("Name").value;
        else {
          throw "Name shouldn't exceed 7";
        }
      }
      if (prop == "address") {
        var letters = /^[A-Za-z]+$/;

        if (value.match(letters)) {
          obj[prop] = document.getElementById("Address").value;
        } else {
          throw "Address should be String";
        }
      }
      if (prop == "age") {
        if (value > 25 && value < 50) {
          obj[prop] = document.getElementById("age").value;
        } else {
          throw "Age should be between 25 and 50";
        }
      }
    },

    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      } else {
        return `creating new property is not allowed`;
      }
    },
    has: function () {},
  };

  targetObject = {
    name: " ",
    address: " ",
    age: "",
  };

  createProxy();
}
var p;
function createProxy() {
  p = new Proxy(targetObject, handler);
  p.name = document.getElementById("Name").value;
  p.address = document.getElementById("Address").value;
  p.age = document.getElementById("age").value;
  console.log(p);
}
