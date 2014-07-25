Parse.initialize("VzA1OHYwxJS1hIhddwxiabGMHpAyfGGTsb53jKEv", "DL1poLJ3xopc0bWomQWujpUI5H2DdVD2hhaya6F8");


// Create an instance of my Collection
var all_posts = new Posts();


// Grab all my data from my server
// After it's complete, create a new view with data
all_posts.fetch().done(function () {
  window.blog_router = new BlogRouter();
	Backbone.history.start();
});
 

var AppView = function (){

  this.showView = function(view) {
    if (this.currentView){
      this.currentView.remove();
    }

    this.currentView = view;
    this.currentView.render();

    $(".zombie").html(this.currentView.el);
  }

}

 
// Something happens
$(".addNewBtn").on("click", function() {

  // State changes
  $("body").toggleClass("dialogIsOpen");
  // $('.addNewBtn').hide();
  

});


$('.submit').on('click', function (event) {
  event.preventDefault();

  var temp_post = new Post({
    title: $('.title-container').val(),
    author: $('.author-container').val(),
    content: $('.create-post-container').val(),
    tags: $('.tag-container').val()
    
  });

   temp_post.save(null, {
      success: function(temp_post) {
        // Adds to my collection
        all_posts.add(temp_post);
        // Resets my form 
        // $(this).trigger('reset');
        // $('.modal-window').removeClass('modal-open');
      }
    });
   $("form")[0].reset();
   $('.addNewBtn').show();
});



// // 	// Create an instance of my Collection
// // var whiskey_list = new WhiskeyCollection();

// // Grab all my data from my server
// // After it's complete, create a new view with data
// whiskey_list.fetch().done( function (){
//   // Define Global Router && Start History
//   window.whiskey_router = new WhiskeyRouter();
//   Backbone.history.start();
// });


// Submit Form
// Create a new Whiskey and add it to my collection
// Interesting I put this here - http://goo.gl/2RbmvE
// but I did so because it didn't make sense (to me anyway) to have it as a view
// $('#newWhiskey').on('submit', function (event) {

//   event.preventDefault();

//   // Creates an instance (entry in my DB) of a whiskey model
//   var temp_whiskey = new Whiskey({
//     name: $('.whiskey_title').val(),
//     description: $('.whiskey_desc').val()
//   });

//   // Adds said whiskey to my collection - my liquor cabinet
//   whiskey_list.add(temp_whiskey).save();

//   // Resets my form - skadoosh
//   $(this).trigger('reset');
