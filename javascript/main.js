

$(".gallery").hide().delay(500).fadeIn(1000);


baguetteBox.run(".gallery", {
  buttons: true,
  
});

const $gallery_items = $(".gallery a");

$("#search").on("keyup", function(event) {
  let $search = $(event.target).val().toUpperCase();
  for ( let i = 0 ; i < $gallery_items.length ; i += 1) {
    let $search_item = $gallery_items.eq(i);
    if ($search_item.attr("title").toUpperCase().indexOf($search) === -1) {
      $search_item.fadeOut(500);
    } 
    if ($search_item.attr("title").toUpperCase().indexOf($search) !== -1) {
      $search_item.hide().fadeIn(500);
    }
  }
});


