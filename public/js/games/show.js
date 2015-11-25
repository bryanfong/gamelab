$(function(){
  API.showGame().then(function (game) {
    console.log(game);
    $('#gameDetails').append('\
        <div class="col-sm-12 col-md-12">\
          <div class="thumbnail">\
            <img src="' + game.screenshot + '">\
            <div class="caption">\
              <h3>' + game.title + '</h3>\
              <p>' + game.description + '</p>\
              <p><a href="' + game.url +'" class="btn btn-primary" role="button">Play Now</a>\
            </div>\
          </div>\
        </div>\
      ')

  })
  // }, errorHandling);

})