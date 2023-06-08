(function ($) {
  "use strict";
  $(document).ready(function ($) {
    var jsDemo = document.getElementById("add-to-card");
    $("#add-to-card").on("click", function (e) {
      e.preventDefault();
      console.log("click");
      $(".cart").hover();
    });
  });
});
