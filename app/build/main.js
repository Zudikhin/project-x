$(document).ready(function() {
  "use strict";

  $("#burger_btn").click(function() {
    $("#burger_btn").toggleClass("active");
    $(".header__nav-mobile").toggleClass("active");
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".header__social.instagram").click(function() {
    $(".popup__instagram").addClass("active");
  });

  $(".header__social.vk").click(function() {
    $(".popup__vk").addClass("active");
  });

  $(".content__input").each(function(i, elem) {
    $(elem).focusin(function() {
      $(this).css("border", "1px solid #b2b2b2");
    });
    $(elem).focusout(function() {
      $(this).css("border", "1px solid #efefef");
    });
  });

  $(".popup__instagram input").on("propertychange input", function(e) {
    if (this.value == "") {
      $(this)
        .siblings("span")
        .removeClass("active");
      $(this).removeClass("active");
    } else {
      $(this)
        .siblings("span")
        .addClass("active");
      $(this).addClass("active");
    }
    if ($("#login-insta").val() != "" && $("#pass-insta").val() != "") {
      $(".insta__submit").addClass("active");
    } else {
      $(".insta__submit").removeClass("active");
    }
  });

  $("#pass-insta").on("propertychange input", function(e) {
    if (this.value == "") {
      $("#pass-insta").attr("type", "password");
      $(".insta__show").css("display", "none");
      $(".insta__hide").css("display", "none");
    } else {
      if ($("#pass-insta").attr("type") == "text") {
        $(".insta__show").css("display", "none");
      } else {
        $(".insta__show").css("display", "block");
      }
    }
  });

  $(".insta__show").click(function() {
    var btnShow = $(".insta__password input");
    if (btnShow.attr("type") == "password") {
      btnShow.attr("type", "text");
    }
    $(this).css("display", "none");
    $(".insta__hide").css("display", "block");
  });

  $(".insta__hide").click(function() {
    var btnHide = $(".insta__password input");
    if (btnHide.attr("type") == "text") {
      btnHide.attr("type", "password");
    }
    $(this).css("display", "none");
    $(".insta__show").css("display", "block");
  });

  $(".insta__close").click(function() {
    $(".popup__instagram").removeClass("active");
  });
});
