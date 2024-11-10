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
          // Entferne die `show`-Klasse von allen Abschnitten und füge sie dann dem aktiven Abschnitt hinzu
          seitentextRechts.classList.remove("show", "fade-out");
          seitentextRechts2.classList.remove("show", "fade-out");
          seitentextRechts3.classList.remove("show", "fade-out");
  
          if (entry.target.id === "erste-sektion") {
            seitentextRechts.classList.add("show");
          } else if (entry.target.id === "zweite-sektion") {
            seitentextRechts2.classList.add("show");
          } else if (entry.target.id === "dritte-sektion") {
            seitentextRechts3.classList.add("show");
          }
        } else {
          // Beim Verlassen der Sektion die "fade-out"-Klasse hinzufügen
          if (entry.target.id === "erste-sektion") {
            seitentextRechts.classList.add("fade-out");
          } else if (entry.target.id === "zweite-sektion") {
            seitentextRechts2.classList.add("fade-out");
          } else if (entry.target.id === "dritte-sektion") {
            seitentextRechts3.classList.add("fade-out");
          }
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    observer.observe(ersteSektion);
    observer.observe(zweiteSektion);
    observer.observe(dritteSektion);
  });
  
  function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = image.src; // Direkter Zugriff auf das `src`-Attribut des Bildes
    lightbox.style.display = "flex";
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  