(function () {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  var badge = document.querySelector("[data-open-status]");
  if (!badge) return;

  var now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })
  );
  var day = now.getDay();
  var minutes = now.getHours() * 60 + now.getMinutes();
  var lunch = minutes >= 11 * 60 && minutes < 14 * 60;
  var dinner = minutes >= 17 * 60 && minutes < 23 * 60;
  var open = day !== 1 && (lunch || dinner);

  badge.textContent = open ? "Jetzt geöffnet" : "Derzeit geschlossen";
  badge.classList.add(open ? "open" : "closed");
  badge.hidden = false;
})();
