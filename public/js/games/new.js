$(function(){
  var submitted = false;

  $('#new-game').on('submit', function (e){
    e.preventDefault();

    if(!submitted){
      var params = {
        game : {
          title        : $("#game-title").val(),
          category        : $("#game-category").val(),
          description : $("#game-description").val(),
          screenshot        : $("#game-screenshot").val(),
          url        : $("#game-url").val(),
        }
      }

      API.createGame(params).then(function(data){
        console.log(data);
        window.location.href = "/games/";
      }, function(error){
        submitted = false;
      })
      submitted = true;
    }
  })
});