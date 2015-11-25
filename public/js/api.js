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
};

var API = new API_WRAPPER();