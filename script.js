document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentSectionIndex = 0;
  
    document.addEventListener("wheel", function (event) {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) {
          currentSectionIndex = sections.length - 1;
        }
      } else {
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
          currentSectionIndex = 0;
        }
      }
      changeContent(currentSectionIndex);
    });
  
    function changeContent(index) {
      sections.forEach((section, idx) => {
        if (idx === index) {
          section.style.opacity = 1;
        } else {
          section.style.opacity = 0;
        }
      });
    }
  });