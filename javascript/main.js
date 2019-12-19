



$("img").each(function (index, element){
  console.log(index, $(element).attr("alt"));
});


baguetteBox.run(".gallery", {
  buttons: true,
  
});

$("figcaption").hide();
