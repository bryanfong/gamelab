$(function(){
  var game_id = window.location.pathname.split("/")[2];

  var imgElem           = $('#show-img');
  var titleElem         = $('#show-title');
  var descriptionElem   = $('#show-description');
  var playBtnElem       = $('#show-play-btn');
  var BookmarkBtnElem   = $('#show-bookmark-btn');
  var UnbookmarkBtnElem = $('#show-unbookmark-btn');

  API.showGame().then(function (game) {
    console.log(game);

    imgElem.attr("src", game.screenshot);
    titleElem.html(game.title);
    descriptionElem.html(game.description);
    playBtnElem.attr("href", game.url);
  }, errorHandling);

  BookmarkBtnElem.on('click', function (e) {
    e.preventDefault();

    BookmarkBtnElem.addClass("hide");
    UnbookmarkBtnElem.removeClass("hide");

    var params = {
      bookmark: {
        game_id: game_id
      }
    }

    API.createBookmark(params).then(function (data) {
      console.log(data)
    }, errorHandling)
  })

  UnbookmarkBtnElem.on('click', function (e) {
    e.preventDefault();

    BookmarkBtnElem.removeClass("hide");
    UnbookmarkBtnElem.addClass("hide");
  })

})