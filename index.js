//1.1. 函数调用

const name = "GG";

const helloUser = (username) => console.log(`Hello, ${username}`);

helloUser(name);

//2

const a2 = 2;
const b2 = 3;

const sum = function (a, b) {
  return a + b;
};

console.log(sum(a2, b2));

//5

const a5 = 9;

const oddOrEven = (num) =>
  num % 2 === 0 ? `Number ${num} is even` : `Number ${num} is odd`;

console.log(oddOrEven(a5));

//6

const a6 = 10;
const b6 = 5;

const maxNumber = (num1, num2) =>
  num1 > num2 ? `${num1} is bigger` : `${num2} is bigger`;

console.log(maxNumber(a6, b6));

//10

const a10 = 4;

function factorial(num) {
  let sum = 1;

  for (let i = 1; i <= num; i++) sum *= i;

  return sum;
}

console.log(factorial(a10));

//20

// const a20 = +prompt("1-ci terefi elave edin");
// const b20 = +prompt("2-ci terefi elave edin");
// const c20 = +prompt("3-cu terefi elave edin");

// function trianglekv

// if (a20 === b20 && b20 === c20) {
//   beraberTerefli();
// } else if (a20 !== b20 && b20 !== c20) {
//   beraberYanli();
// } else {
//   muxtelifYanli();
// }

// function beraberTerefli(a, b, c) {}
// function beraberYanli() {}
// function muxtelifYanli() {}

//

const username21 = "salam";

const sait = "aeiou";

function nameTest(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < sait.length; j++) {
      if (a[i] === sait[j]) sum++;
    }
  }
  return sum;
}

console.log(nameTest(username21));

//  21 Juli 2025

//2

const obj = {
  name: "Ali",
  age: 20,
};

const age21 = obj["age"] + 1;
obj["age"] = age21;
console.log(obj);

//5

const obj5 = {
  book: "1984",
  author: "George Orwell",
};

delete obj5.book;

if (obj5.book !== undefined) {
  console.log(obj5.book, "obj5.book");
}

//6

// const name6 = prompt("Your Name");
// const age6 = prompt("Your Age");

const obj6 = {
  // name: name6,
  // age: Number(age6),
};

console.log(obj6, "obj6");

//7

const obj7 = {
  name: "Ali",
  age: 24,
};

for (keys in obj7) console.log(`key:${keys},value:${obj7[keys]}`);

console.log(Object.keys(obj7), Object.values(obj7));

//9

const obj9 = {
  counter: 0,
  increase: function () {
    this.counter++;
  },
  decrease: function () {
    this.counter--;
  },
};

obj9.increase();

console.log(obj9.counter, "counter");

//1-1

const obj11 = {
  name: "Ali",
  surname: "Gulu",
  yearOfBirth: 1999,
  getAge: function () {
    return new Date().getFullYear() - this.yearOfBirth;
  },
};

console.log(obj11.getAge(), "Age");

//1-5

const obj15 = {
  salary: 2000,
  bonus: 5000,
  getFullSalary: function () {
    return this.salary + this.bonus;
  },
};

console.log(obj15.getFullSalary(), "getFullSalary");

//1-8

const obj18 = {
  price: 1000,
  discount: 20,
  tax: 18,
  getFinalPrice: function () {
    let discountPrice = this.price - (this.discount * this.price) / 100;

    return discountPrice + (discountPrice * this.tax) / 100;
  },
};

console.log(obj18.getFinalPrice(), "getFinalPrice");

//22 Juli 2025

//5-in array formasi

// const arrQuiz = [
//   {
//     sual: "Azerbaycanin paytaxti",
//     cavab: "Baku",
//   },
//   {
//     sual: "Azerbaycanin paytaxti",
//     cavab: "Baku",
//   },
//   {
//     sual: "Azerbaycanin paytaxti",
//     cavab: "Baku",
//   },
// ];

// function askQueastion() {
//   let correctAns = 0;
//   for (let i = 0; i < arrQuiz.length; i++) {
//     const arrQuizAns = prompt(arrQuiz[i].sual);
//     if (arrQuizAns === arrQuiz[i].cavab) {
//       correctAns++;
//       alert(`Your correct Answers ${correctAns}`);
//     } else {
//       alert("Incorrect");
//     }
//   }
// }

// askQueastion();

//5-in object formasi

const objQuiz = {
  objQuiz1: {
    sual: "Azerbaycanin paytaxti",
    cavab: "Baku",
  },
  objQuiz2: {
    sual: "Rusiyanin paytaxti",
    cavab: "Baku",
  },
  objQuiz3: {
    sual: "Almaniyanin paytaxti",
    cavab: "Berlin",
  },
};

function askQueastion() {
  let correctAns = 0;
  for (const key in objQuiz) {
    const objQuizAns = prompt(objQuiz[key].sual);
    if (objQuizAns === objQuiz[key].cavab) {
      correctAns++;
      alert(`Your correct Answers ${correctAns}`);
    } else {
      alert("Incorrect");
    }
  }
}

// askQueastion();

//1-in

function fillTheObj(name, age, schoolClass) {
  return {
    name,
    age,
    schoolClass,
    indroduce: function () {
      return console.log(
        `Salam, menim admin ${this.name}, men ${this.age} yasindayam, ${this.schoolClass} sinifde oxuyuram.`
      );
    },
    update: function (name, age, schoolClass) {
      (this.name = name), (this.age = age), (this.schoolClass = schoolClass);
    },
  };
}

const ali = fillTheObj("Ali", 20, 8);
const vali = fillTheObj("Vali", 22, 9);

console.log(ali, "newStudent ali");
console.log(vali, "newStudent vali");

ali.indroduce();
vali.indroduce();

ali.update("Pirveli", 30, 10);
ali.indroduce();

//6

// const name6 = prompt("Yeni adinizi daxil edin:");
// const pwd6 = Number(prompt("Yeni parolunuzu daxil edin:"));

const userObj6 = {};

// userObj6.name = name6;
// userObj6.pwd = pwd6;

function checkUser() {
  for (let i = 0; i < 3; i++) {
    const userName = prompt("Adinizi daxil edin:");
    const userPwd = Number(prompt("Parolunuzu daxil edin:"));
    if (userObj6.name === userName && userObj6.pwd === userPwd) {
      alert("Siz daxil oldunuz!");
      return;
    }
    alert("Sehv daxil olmuzu. yeniden cehd edin!");
  }
}
// checkUser();

function checkTen(num) {
  let sum = 0;

  let numTrunc = Math.trunc(Math.trunc(num) / 10);
  if (numTrunc > 0) {
    sum++;
  } else {
  }
  console.log(sum);
}

// checkTen(123.12);

//23 Juli 2025

//1-1-2-2

const sentence = "ADJ sjkda sad sd";
const num12 = 15.6;
// const promtUser = prompt("Ment daxil edin");
// const promtUserNumber = prompt("Reqeom daxil edin");

const exerice1122 = (sentence, num, text, prom) => {
  console.log(sentence.split(" ").length, "Length of sentence");
  console.log(Math.trunc(num), "Decimal of number");
  console.log(text?.toUpperCase(), "Text in upper case");
  console.log(Math.sqrt(), "Square of number");
};

// exerice1122(sentence, num12, promtUser, promtUserNumber)

//3-3-4-4

const text3 = "  adawda  ";
const num33 = 15.6;
const replaceA = "Here is a text with aaaa";
const concatFracFirst = 13.6;
const concatFracSecond = 1.5;

const exerice3344 = (text, num, textReplace, concatFirst, concatSecond) => {
  console.log(text.trimEnd(), "Trimmed end");
  console.log(
    Math.ceil(num),
    "Ceil of number",
    Math.floor(num),
    "Floor of number"
  );
  console.log(textReplace.replaceAll("a", "b"), "Replaced with b");
  console.log(Math.trunc(concatFirst + concatSecond), "Concat numbers trunc");
};

exerice3344(text3, num33, replaceA, concatFracFirst, concatFracSecond);

//5-5-6-6

let str55 = "azerbaijan";
let num66 = 334;

const exerice5566 = (text, num) => {
  console.log(
    text.slice(0, 1).toUpperCase().concat(str55.slice(0)),
    "uppered first letter"
  );
  console.log(text.repeat(3), "Reapeted text");
  console.log(num.toString().split("").length, "Length of number");
};

exerice5566(str55, num66);

//7-7-8-8

const firstWord = "alma";
const secondWord = "ulu";

const exerice7788 = (a, b) => {
  console.log(a.at(0) + b.slice(1, -1) + a.at(a.length - 1));
  console.log(b.at(0) + a.slice(1, -1) + b.at(b.length - 1));
};

exerice7788(firstWord, secondWord);
