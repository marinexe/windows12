/*const textarea = document.getElementById("textarea");
textarea.value = `Microsoft Windows [Version 10.0.26100.6899]
(c) Microsoft Corporation. All rights reserved.
C:\\Users\\me>`;

if (textarea.value.endsWith("C:\\Users\\me>")) {
  textarea.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {

      e.preventDefault();
    }
      if (e.key === "Backspace") {
      e.preventDefault();
    }
  });
}
textarea.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    textarea.value += "\nC:\\Users\\me>";
    textarea.scrollTop = textarea.scrollHeight;
    let line=3;
  
  }
})
    let line=3;
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    line++;
    console.log(line);
  }
  if (line == line){

  }
})
*/
let l1 = document.getElementById("l1");
l1.style.userSelect = "none";
let l2 = document.getElementById("l2");
 l2.style.userSelect = "none";

let keyboardDisabled = false;

document.addEventListener("keydown", (e) => {
  if (keyboardDisabled) e.preventDefault();
});



const l3i = document.getElementById("l3i");

let currentLine = 3;
if (currentLine){
  let l1 = document.getElementById("l1");
  l1.content = "Microsoft Windows [Version 10.0.26100.6899]";
  l1.userSelect = "none";
  let l2 = document.getElementById("l2");
  l2.style.userSelect= "(c) Microsoft Corporation. All rights reserved."; 
  l3i.focus();
  setCursorToEnd(l3i);
}

let ul = document.getElementById("ul");
let newLi = document.createElement("li");
ul.addEventListener("keydown", function(e) {
//za novi linii

  if (e.key === "Enter") {
      e.preventDefault();
      newLi.className = "inputi2";
      newLi.contentEditable = true;
      newLi.id = "l" + (currentLine + 1);
      newLi.innerText = defaultInnerText;
      ul.appendChild(newLi);
      newLi.focus();
      currentLine++;
      console.log(currentLine);
      console.log(newLi);
      setCursorToEnd(newLi);
  }
  ul.addEventListener("keydown", function(e) {

    if (e.key === "ArrowUp") {
      e.preventDefault();
      }
    });
//od ai

function getOldLines(currentLine, min = 1) {
  const oldLine = [];
  for (let i = currentLine; i >= min; i--) {
    const el = document.getElementById("l" + i);
    if (!el) continue;               // skip missing elements
    oldLine.push(el);
  }
  return oldLine;
}

// usage
const arr = getOldLines(currentLine,1); // -> collects l5, l4, l3, l2, l1 (if they exist)
console.log(arr);

    console.log(oldLine);
    for (let i = currentLine; i <= 3; i--) {
      document.getElementById("l" + i).contentEditable = false && (keyboardDisabled = true);
    }
});
      document.addEventListener("keydown", (e) => {e.preventDefault();});
      console.log(newLi.id);

const defaultInnerText = "C:\\Users\\me>";
l3i.value = defaultInnerText;
l3i.focus();

function setCursorToEnd(el) {
if (typeof el.value !== 'undefined') {
        const end = el.value.length;
        
        el.setSelectionRange(end, end);
        l3i.style.userSelect = "none";
    }}
setCursorToEnd(l3i);

if(l3i.value.endsWith("C:\\Users\\me>")){
  l3i.addEventListener("keydown", function(e) {
    if (e.key === "Backspace") {
      e.preventDefault();
      l3i.style.userSelect = "none";

    }
  });
}
function setCursorToEnd(el) {
    
    const selection = window.getSelection();
    const range = document.createRange();
    if (el.lastChild) {
        range.setStartAfter(el.lastChild);
        range.collapse(true);    
        selection.removeAllRanges();
        selection.addRange(range);
    }
    else {
        el.focus();
    }
}
