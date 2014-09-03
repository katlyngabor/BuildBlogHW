Parse.initialize("VzA1OHYwxJS1hIhddwxiabGMHpAyfGGTsb53jKEv", "DL1poLJ3xopc0bWomQWujpUI5H2DdVD2hhaya6F8");


var all_posts = new Posts(); 

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


$(".addNewBtn").on("click", function() {

  $("body").toggleClass("dialogIsOpen");


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
        all_posts.add(temp_post); 
      }
    });
   
   $("form")[0].reset();
   $('.addNewBtn').show();
});


// $('.logOutBtn').on('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('logout button clicked');
//     Parse.User.logOut();  
//     window.blog_router.navigate('login/', { trigger: true });
// });

$('.closeModalBtn').on('click', function(e){
  console.log('close your modal');
  e.preventDefault();
  $('body').toggleClass('dialogIsOpen');
});
