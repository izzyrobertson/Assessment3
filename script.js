console.log('javascript');

$(document).ready(function(){

  $("#home, #book, #locationspage, #contact").hide();

  $("#homeNav").click(function(){
    $("#home").show();
    $("#services, #book, #locationspage, #contact").hide();
  });

  $("#servicesNav").click(function(){
    $("#services").show();
    $("#home, #book, #locationspage, #contact").hide();
  });

  $("#bookNav").click(function(){
    $("#book").show();
    $("#home, #services, #locationspage, #contact").hide();
  });

  $("#locationspageNav").click(function(){
    $("#locationspage").show();
    $("#home, #services, #book, #contact").hide();
  });

  $("#contactNav").click(function(){
    $("#contact").show();
    $("#home, #services, #book, #locationspage").hide();
  });
});

  // $("#mainMenu").hide();
  //
  // $("#main").click(function(){
  //   $("#mainMenu").show();
  //   $("#startersMenu, #drinksMenu, #dessertMenu").hide();
  // });
