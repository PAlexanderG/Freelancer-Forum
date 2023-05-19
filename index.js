// Creating an array of users including name, age, and occupation.
const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];
// grab the "root" element, add an h1 element, give it text of "FREELANCERS", and append the HTML document
// Calling the (function main() {
// })
function main() {
  // Grabbed root element: HTMLElement = create a varible: document. @parameter and specifies the ID value:
  const rootElement = document.getElementById("root");

  // adding h1  element: HTMLElement = create a varible: document. @parameter and specifies the ID value:
  const h1 = document.createElement("h1");
  // add a text ( = "Text here";) node inside HTML (h1.innerHTML)
  h1.innerHTML = "FREELANCERS";
  // passing the parentElement to the appendChild
  rootElement.appendChild(h1);

  //create an unordered list element. loop through the users array creating li elements, append those elements using your Dynamic Data HTML document
  const ul = document.createElement("ul");
  rootElement.appendChild(ul);

  //for loop to create li items (add the object: users)
  for (let person of users) {
    // declare the variable using dynamic data html: MTHLElement to var (document) using a method paramenter to "li"
    let li = document.createElement("li");
    // declare the variable of HTMLElement to the property (innerHTML) = to the object . to the property
    li.innerHTML = person.name;
    // passing the parentElent to the appendChild
    ul.appendChild(li);
  }
  // passing the rootElent to the appendChild (HTMLul)
  rootElement.appendChild(ul);
}

//call the main function
main();
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert("outer, once");
}
function noneOnceHandler(event) {
  alert("outer, none-once, default");
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert("middle, capture");
}
function noneCaptureHandler(event) {
  alert("middle, none-capture, default");
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  alert("inner1, passive, open new page");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert("inner2, none-passive, default, not open new page");
}
