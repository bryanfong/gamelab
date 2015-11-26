$(function(){

  API.getBookmarks().then(function (bookmarks) {
    console.log(bookmarks);
    bookmarks.forEach(function(bookmark){

      console.log(bookmark.game_id);
      $('#bookmarks').append('\
        <div class="col-sm-6 col-md-4">\
          <div class="thumbnail">\
            <img src="' + bookmark.game_id.screenshot + '">\
            <div class="caption">\
              <h3>' + bookmark.game_id.title + '</h3>\
              <p>' + bookmark.game_id.description + '</p>\
              <p><a href="/games/' + bookmark.game_id._id +'" class="btn btn-primary" role="button">More Details</a>\
            </div>\
          </div>\
        </div>\
      ')

    })
  })
  // }, errorHandling);

})