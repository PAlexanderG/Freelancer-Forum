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
function main() {
  // grabbed root element: HTMLElement = create a varible: document. @parameter and specifies the ID value:
  const rootElement = document.getElementById("root");

  // adding h1  element: HTMLElement = create a varible: document. @parameter and specifies the ID value:
  const h1 = document.createElement("h1");
  // add a text node inside HTML (h1.innerHTML)
  h1.innerHTML = "FREELANCERS";
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
    // pass the parentElent to the appendChild
    ul.appendChild(li);
  }
  // pass the rootElent to the appendChild (HTMLul)
  rootElement.appendChild(ul);
}

//call the main function
main();
