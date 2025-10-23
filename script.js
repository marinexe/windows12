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

ta.addEventListener('keydown', (e) => {
  const selStart = ta.selectionStart;
  const selEnd = ta.selectionEnd;
  
 
  const hasSelection = selStart !== selEnd;


  if (hasSelection) {
    const deletingKeys = [
      'Backspace',
      'Delete'
    ];
  }

    const isPrintable = e.key.length === 1;

    if (deletingKeys.includes(e.key) || isPrintable) {
      e.preventDefault();
    }
  }
);
