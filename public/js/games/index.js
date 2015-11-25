$(function(){

  API.getGames().then(function (games) {
    games.forEach(function(game){
      $('#games').append('\
        <div class="col-sm-6 col-md-4">\
          <div class="thumbnail">\
            <img src="' + game.screenshot + '">\
            <div class="caption">\
              <h3>' + game.title + '</h3>\
              <p>' + game.description + '</p>\
              <p><a href="/games/' + game._id +'" class="btn btn-primary" role="button">More Details</a>\
            </div>\
          </div>\
        </div>\
      ')
    })
  })
  // }, errorHandling);

})
