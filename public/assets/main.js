const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// const pasteBtn = document.querySelector(".paste-btn"),
//   input = document.querySelector(".input");

// function paste() {
//   navigator.clipboard.readText().then((clipText) => (input.value = clipText));
//   document.querySelector(".text").innerHTML = "Clear";
//   document.querySelector(".bx").classList.replace("bx-paste", "bx-x");
// }

// function clear() {
//   input.value = "";
//   document.querySelector(".text").innerHTML = "Paste";
//   document.querySelector(".bx").classList.replace("bx-x", "bx-paste");
// }

// pasteBtn.addEventListener("click", () => {
//   if (input.value == "") {
//     paste();
//   } else {
//     clear();
//   }
// });
