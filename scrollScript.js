document.addEventListener("DOMContentLoaded", function () {
    const ersteSektion = document.getElementById("erste-sektion");
    const zweiteSektion = document.getElementById("zweite-sektion");
    const dritteSektion = document.getElementById("dritte-sektion");
  
    const seitentextRechts = document.querySelector(".seitentext-rechts"); // Webdesign
    const seitentextRechts2 = document.querySelector(".seitentext-rechts2"); // Printdesign
    const seitentextRechts3 = document.querySelector(".seitentext-rechts3"); // Markenidentität
  
    const options = {
      root: null,
      threshold: 0.1,
    };
  
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entfernt die `show`-Klasse von allen Abschnitten, dann zeigt den richtigen an
          seitentextRechts.classList.remove("show");
          seitentextRechts2.classList.remove("show");
          seitentextRechts3.classList.remove("show");
  
          if (entry.target.id === "erste-sektion") {
            seitentextRechts.classList.add("show");
          } else if (entry.target.id === "zweite-sektion") {
            seitentextRechts2.classList.add("show");
          } else if (entry.target.id === "dritte-sektion") {
            seitentextRechts3.classList.add("show");
          }
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    observer.observe(ersteSektion);
    observer.observe(zweiteSektion);
    observer.observe(dritteSektion);
  });
  