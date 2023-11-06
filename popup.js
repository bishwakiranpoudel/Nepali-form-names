// Sample dataset of words
const wordDataset = ["apple", "banana", "cherry", "date", "grape", "kiwi"];

// Listen for keyup events in the text field
document.addEventListener("keyup", (event) => {
  const activeElement = document.activeElement;
  
  // Check if the active element is an input field or a textarea
  if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
    const inputValue = activeElement.value;
    const matchingWords = wordDataset.filter((word) => word.startsWith(inputValue));
    
    // Display suggestions directly in the text field
    activeElement.setAttribute("list", "suggestions");
    
    const datalist = document.getElementById("suggestions");
    datalist.innerHTML = "";
    
    matchingWords.forEach((word) => {
      const option = document.createElement("option");
      option.value = word;
      datalist.appendChild(option);
    });
  }
});
