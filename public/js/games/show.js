$(function(){
  var game_id = window.location.pathname.split("/")[2];

  var imgElem           = $('#show-img');
  var titleElem         = $('#show-title');
  var descriptionElem   = $('#show-description');
  var playBtnElem       = $('#show-play-btn');
  var BookmarkBtnElem   = $('#show-bookmark-btn');
  var UnbookmarkBtnElem = $('#show-unbookmark-btn');

  var params = {
    bookmark: {
      game_id: game_id
    }
  }

  // get game info
  API.showGame().then(function (game) {
    console.log(game);

    imgElem.attr("src", game.screenshot);
    titleElem.html(game.title);
    descriptionElem.html(game.description);
    playBtnElem.attr("href", game.url);
  }, errorHandling);

  // get bookmark information
  API.getBookmark(params).then(function (data) {
    if (data.message == "Found") {
      UnbookmarkBtnElem.removeClass("hide");
    } else {
      BookmarkBtnElem.removeClass("hide")
    }
  })

  // bind bookmark
  BookmarkBtnElem.on('click', function (e) {
    e.preventDefault();

    BookmarkBtnElem.addClass("hide");
    UnbookmarkBtnElem.removeClass("hide");

    API.createBookmark(params).then(function (data) {
      console.log(data)
    }, errorHandling)
  })


  // bind unbookmark
  UnbookmarkBtnElem.on('click', function (e) {
    e.preventDefault();

    BookmarkBtnElem.removeClass("hide");
    UnbookmarkBtnElem.addClass("hide");

    API.deleteBookmark(params).then(function (data) {
      console.log(data)
    }, errorHandling)
  })

})