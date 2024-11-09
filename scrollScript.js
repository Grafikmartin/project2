document.addEventListener("scroll", function () {
    const dritteSektion = document.getElementById("dritte-sektion");
    const sechsteSektion = document.getElementById("sechste-sektion");
    const seitentextRechts = document.querySelector(".seitentext-rechts");
    const seitentextRechts2 = document.querySelector(".seitentext-rechts2");
    const seitentextRechts3 = document.querySelector(".seitentext-rechts3");
  
    // Berechnen der aktuellen Position relativ zum Viewport
    const dritteSektionPosition = dritteSektion.getBoundingClientRect().top + window.scrollY;
    const sechsteSektionPosition = sechsteSektion.getBoundingClientRect().top + window.scrollY;
    const currentScroll = window.scrollY;
  
    console.log("Aktuelle Scrollposition:", currentScroll);
    console.log("Position dritte Sektion:", dritteSektionPosition);
    console.log("Position sechste Sektion:", sechsteSektionPosition);
  
    if (currentScroll < dritteSektionPosition) {
      seitentextRechts.style.display = "block";
      seitentextRechts2.style.display = "none";
      seitentextRechts3.style.display = "none";
    } else if (currentScroll >= dritteSektionPosition && currentScroll < sechsteSektionPosition) {
      seitentextRechts.style.display = "none";
      seitentextRechts2.style.display = "block";
      seitentextRechts3.style.display = "none";
    } else if (currentScroll >= sechsteSektionPosition) {
      seitentextRechts.style.display = "none";
      seitentextRechts2.style.display = "none";
      seitentextRechts3.style.display = "block";
    }
  });
  