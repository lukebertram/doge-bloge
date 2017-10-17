$(document).ready(function() {
  $("button#demon").click(function() {
    $("body").removeClass();
    $("body").addClass("evil-background");
  });
  $("button#angel").click(function() {
    $("body").removeClass();
    $("body").addClass("good-background");
  });
});
