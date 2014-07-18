// Create an instance of my Collection
var all_posts = new Posts();


// Grab all my data from my server
// After it's complete, create a new view with data
all_posts.fetch().done(function () {
  new PublishedView( { collection: all_posts });
});
 
 
// Something happens
$("button").on("click", function() {

  // State changes
  $("body").toggleClass("dialogIsOpen");

});
