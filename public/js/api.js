//object constructor
var API_WRAPPER = function(){
  this.URL_BASE = window.location.origin;
  console.log(this.URL_BASE);
  var id = window.location.pathname.split("/")[2];
  console.log(id);

  this.getSecret = function(){
    return $.ajax({
      url: this.URL_BASE + "/secret",
      method: "GET"
    });
  };

  this.getGames = function(){
    return $.ajax({
      url: this.URL_BASE + "/api/games",
      method: "GET"
    });
  };

  this.showGame = function(){
    return $.ajax({
      url: this.URL_BASE + "/api/games/" + id,
      method: "GET"
    });
  };

  this.createGame = function(params){
    return $.ajax({
      url: this.URL_BASE + "/api/games",
      method: "POST",
      data: params
    });
  };

  this.createBookmark = function (params) {
    return $.ajax({
      url: this.URL_BASE + "/api/bookmarks",
      method: "POST",
      data: params
    });
  }

  this.showBookmark = function (params) {
    return $.ajax({
      url: this.URL_BASE + "/api/bookmarks/id",
      method: "POST",
      data: params
    })
  }

  this.deleteBookmark = function (params) {
    return $.ajax({
      url: this.URL_BASE + "/api/bookmarks/id",
      method: "DELETE",
      data: params
    });
  }

  this.getBookmarks = function () {
    return $.ajax({
      url: this.URL_BASE + "/api/bookmarks",
      method: "GET"
    });
  }

};

var API = new API_WRAPPER();