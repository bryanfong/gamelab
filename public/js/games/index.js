$(function(){

  API.getGames().then(function (games) {
    games.forEach(function(game){
      console.log(game.screenshot);
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

// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//       </div>
//     </div>
//   </div>
// </div>


// '<div class="row well">
//   <div class="col-xs-12 col-md-2">
//     <a>
//       <img class="img-responsive" src="' + game.screenshot + '" alt="">
//     </a>
//   </div>

//   <div class="col-xs-12 col-md-10">
//     <a>
//       <h3>' + game.title + '</h3>
//     </a>
//   </div>
// </div>'