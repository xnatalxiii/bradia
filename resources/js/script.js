/*-------------------------------------------------

	- Proyect: Bradia Soluciones en TI landing page
	- Date: Oct 2019
	- Author: Bryan Rodríguez

-------------------------------------------------*/
$(document).ready(function() {
  $(".js--section-bradia").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "50px"
    }
  );

  var w = +$(document).width();

  $(".js--first-scroll").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-web").offset().top - 40 },
      800
    );
  });

  $(".js--scroll-to-bradia").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-bradia").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-web").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-web").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-marketing").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-marketing").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-servicios").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-servicios").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-sistemas").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-sistemas").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-telecom").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-telecom").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  $(".js--scroll-to-contacto").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-contacto").offset().top - 40 },
      800
    );
  });

  $(".js--scroll-to-contacto-nav").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-contacto").offset().top - 40 },
      800
    );
    if (w < 768) {
      toggle();
    }
  });

  /*Animations*/

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeInLeft");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-5").waypoint(
    function(direction) {
      $(".js--wp-5").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-7").waypoint(
    function(direction) {
      $(".js--wp-7").addClass("animated fadeInUp");
    },
    {
      offset: "80%"
    }
  );

  $(".js--wp-8").waypoint(
    function(direction) {
      $(".js--wp-8").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-9").waypoint(
    function(direction) {
      $(".js--wp-9").addClass("animated fadeInUp");
    },
    {
      offset: "80%"
    }
  );

  $(".js--wp-10").waypoint(
    function(direction) {
      $(".js--wp-10").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );

  $(".js--wp-11").waypoint(
    function(direction) {
      $(".js--wp-11").addClass("animated fadeInUp");
    },
    {
      offset: "90%"
    }
  );

  $(".js--wp-atention").waypoint(
    function(direction) {
      $(".js--wp-atention").addClass("animated bounce infinite");
    },
    {
      offset: "90%"
    }
  );

  /*mobile*/

  function toggle() {
    var nav = $(".js--main-nav");
    nav.slideToggle(200);
  }

  $(".js--nav-icon").click(toggle);
});
