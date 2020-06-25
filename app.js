const per = "hello world";
console.log(per)
const her = 3;
const her2 = 5;
const result = her + her2
const result2 = her * her2
const result3 = her2 - her
const result4 = her2 / her2
console.log(result,result2,result3,result4)
const kat = "i want sunday";
const kat1 = "and ice cream";
const result5 = kat + kat1;
console.log(result5)
const her3 = false;
const her4 = true;
const result6 = her3 && her4;
const result7 = her3 || her4;
console.log(result6,result7)
const kat2 = "drink";
const kat3 = "eat";
const result8 = kat2 === kat3;
const result9 = kat2 !== kat3;
console.log(result8)
console.log(result9)
const kat4 = "sun";
const kat5 = "sun";
const result10 = kat4 === kat5;
const result11 = kat4 !== kat5;
console.log(result10)
console.log(result11)
const six = false;
console.log (typeof six)
const six1 = "fool";
console.log(typeof six1)
const six2 = 5;
console.log(typeof six2)
const yui = { prop1: 32, prop2: "look", klar: true }
console.log(yui)
const str = "summer";
const str1 = "jummpimg";
console.log(str.length + str1.length)
//task 9 star
const add = (per1, per2) => { return per1 - per2; }
const result12 = add(8, 4);
console.log(result12)
const strok = (strok1, strok2) => { return strok1 + strok2; }
const result_strok = strok("hold","fine");
console.log(result_strok.length)
//task 9 end
//task 10 star
const ski = "Dublin";
const f_ski = () => { const ski2 = "Berlin"; return ski + ski2; }
const result_ski = f_ski();
console.log(result_ski)
//task 10 end
//task 11 start
// Comment:
// first of all, task 11  should be a function
// The second: you try to return the result of console.log function.
// The result of "console.log" function is undefined.
const li = 4 ;
const f_li = (li) => {
  if (typeof li === "string") {
    return (li.length)
  }
   else {
     if (typeof li === "number") {
       return (li+10)
    }
}
}
console.log(f_li(li))
//task 11 end
//task 12 start
const _ = require("lodash");
const tre = "i want go to walk";
const registr = (tre) => { return _.upperCase(tre) }
const result_reg = registr(tre);
console.log(result_reg)
const num = {num1:4, num2: 6};
const f_num = (anyNumber1,anyNumber2) => { return _.add(anyNumber1,anyNumber2) }
const result_f_num = f_num(num.num1, num.num2);
// If you want to return value from function, you have to use return word. f_num function doesn't contain return word.
// Lodash has the same function as well.
console.log(result_f_num) // if you want to call the function, you have to use () brackets
// task 12 end
// task 13 start
const sum = 4 ;
const f_sun = (sum) => {
  if (typeof sum !== "number") {
    throw new Error("sum is not number")
  }
}
f_sun(sum)
try {
  const sum = "not number";
  f_sun(sum)
} catch(e) {
  console.log(e)
}
// task 13 end
// task 14 start
const lap = 4;
const zvyk = "gav";
const pokrov = "wool";

// TODO: function has to return value
const f_animals = (lap,zvyk,pokrov) => {
    if (lap === 2) {
     return console.log("duck")
    }
    else {
    if (lap === 4) {
      if (pokrov === "wool");
      if (zvyk === "miau") {
        return console.log("catch")
      }
    }
    else {
      if (zvyk === "mu") {
         return console.log("cow")
      }
        else {
            if (zvyk === "gav") {
          return console.log("dog")
        }
        else {
            if (zvuk !== "gav") { // something strange. we have to simplify logic.
            throw new Error ("We could not recognize the animal")
          }
        }
      }
    }
  }

  // for help: "throw" has to be used once in the end of the function out of any "if".
}



f_animals(lap,zvyk,pokrov)
// task 14 end
