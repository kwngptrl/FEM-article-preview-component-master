
/*  In mobile mode,
    When icon-share is clicked:
    Add hidden to user class
    Add filter change to icon-share
    Unhide tooltip bar where user is.

    In desktop mode,
    When icon-share is clicked:
    DO NOT hide user class
    Add filter change to icon-share
    Show tooltip bar hovering over icon-share

    Bonus:
    If mouse clicked outside of secondary in either mobile
    or desktop:
    Tooltip is hidden.
    Secondary is returned (if in mobile) 

    Provide a little animation
 */ 
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
      /* If the viewport is greater than or equal to 768px then unhide/hide tooltip, invert icon color */
      if (currentWindowWidth() >= 768) {
        toggleTwo();
        console.log("passed 1st condition");
      } else {
      /* If the viewport is less than 768px then unhide/hide tooltip AND user photo, name, date, and change to dark background, invert icon color */  
        toggleAll();
        console.log("passed 2nd condition");
      }
      console.log(user, tooltip);
    });

    /* btn.addEventListener("click", (e) => {
      e.preventDefault();
      (currentWindowWidth() >= 768) ? toggleTwo() : toggleAll();
    }); */

    window.addEventListener("resize", () => {
      /* When window is being resized and viewport >= 768px then unhide user photo, name, date, reshow white background   */
      if (currentWindowWidth() >= 768) {
        user.classList.remove("hidden");
        target.classList.remove("target-dark");
        console.log("passed resize condition");
      /* Otherwise, if viewport < 768px and tooltip is not hidden, then hide user photo, name, date, ADD dark background  */
      } else if (!tooltip.classList.contains("hidden")) {
        user.classList.add("hidden");
        target.classList.add("target-dark");
        console.log("passed 2nd resize condition");
      }
      console.log(currentWindowWidth(), "This is the last line");
    });

    
    document.addEventListener("click", (e) => {
      let elem = e.target;
      /* Without '!elem.closest(".icon-share") it doesn't work properly in desktop mode  */
      if (!tooltip.classList.contains("hidden") && !elem.closest(".icon-share")) {
        /* In mobile mode, tooltip occupies the bottom of the container, therefore 'target' */
        if ((currentWindowWidth() < 768) && !elem.closest(".target")) {
          console.log(elem);
          console.log("Outside of tooltip1");
          toggleAll();
        }
        /* In desktop mode, tooltip is a separate container, therefore 'tooltip' */
        if (currentWindowWidth() >= 768 && !elem.closest(".tooltip")) {
          console.log(elem);
          console.log("Outside of tooltip2");
          toggleTwo();
        }
      }
    });

    currentWindowWidth();