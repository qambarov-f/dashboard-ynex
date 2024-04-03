var dashAs = document.querySelectorAll(".dashA");

var dropBtns = document.querySelectorAll(".dropbtn");
var dropContent = document.querySelector(".dropdown-content");

dashAs.forEach(function (dashA) {
  dashA.addEventListener("click", function () {
    var ul = dashA.nextElementSibling;
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  });
});

dropBtns.forEach(function (dropBtn) {
  var dropContent = dropBtn.nextElementSibling;
  dropBtn.addEventListener("click", function () {
    if (dropContent.style.display === "none") {
      dropContent.style.display = "block";
    } else {
      dropContent.style.display = "none";
    }
  });
});
