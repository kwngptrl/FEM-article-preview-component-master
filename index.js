    let user = document.querySelector('.user');
    let tooltip = document.querySelector('.tooltip');
    let icon = document.querySelector(".icon-share");
    let target = document.querySelector(".target");
    const btn = document.querySelector("#btn");

    function currentWindowWidth() {
        return document.documentElement.clientWidth;
    }    

    function toggleAll() {
      tooltip.classList.toggle("hidden");
      icon.classList.toggle("icon-dark");
      user.classList.toggle("hidden");
      target.classList.toggle("target-dark");
    }

    function toggleTwo() {
      tooltip.classList.toggle("hidden");
      icon.classList.toggle("icon-dark");
    }

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      (currentWindowWidth() >= 768) ? toggleTwo() : toggleAll();
    });

    window.addEventListener("resize", () => {
      if (currentWindowWidth() >= 768) {
        user.classList.remove("hidden");
        target.classList.remove("target-dark");
      } else if (!tooltip.classList.contains("hidden")) {
        user.classList.add("hidden");
        target.classList.add("target-dark");
      }
    });

    
    document.addEventListener("click", (e) => {
      let elem = e.target;
      if (!tooltip.classList.contains("hidden") && !elem.closest(".icon-share")) {
        if ((currentWindowWidth() < 768) && !elem.closest(".target")) {
          toggleAll();
        }
        if (currentWindowWidth() >= 768 && !elem.closest(".tooltip")) {
          toggleTwo();
        }
      }
    });

    currentWindowWidth();