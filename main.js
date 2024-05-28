let button = document.querySelector(".button");

button.addEventListener("click", () => {
  let elementNode = document.createElement("div");
  let textNode = document.createTextNode("NEW DIV CREATED");
  let attributeNode = document.createAttribute("class");
  attributeNode.value = "new-div";
  elementNode.appendChild(textNode);
  elementNode.setAttributeNode(attributeNode);
  document.body.appendChild(elementNode);
});
