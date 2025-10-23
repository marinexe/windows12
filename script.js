const textarea = document.getElementById("textarea");
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
  }
})

let line = 3;