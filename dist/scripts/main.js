var Post = Parse.Object.extend({

	className: 'PostItem',

	idAttribute: "objectId",

	initialize: function() {
		var title = this.get('title');
		console.log( title + ' has been added to your posts.');
	}

});

var Posts = Parse.Collection.extend ({

	model: Post
	// url:"http://tiy-atl-fe-server.herokuapp.com/collections/katlynsblog"

});

// var all_posts = new Posts();


// var Student = Backbone.Model.extend ({
 
//   defaults: {
//     name: '',
//     location: 'Atlanta',
//     awesome: true
//   },
 
//   idAttribute: "_id",
 
//   initialize: function () {
//     var name = this.get('name');
//     console.log( name + ' has been added to your list of students.');
//   }
 
// });
 

var PublishedView = Backbone.View.extend({
		
		// el:'.wrapper',

	 	events: { 
     	'click a' : 'viewPost'
 		},

		initialize: function(){
				this.render();
				this.collection.on('change', this.render, this);
				this.collection.on('destroy',this.render, this);
				this.collection.on('add', this.render,this);
		},

		render:function(){

			var template = Handlebars.compile($("#published-template").html());
			var rendered = template({ posts:this.collection.toJSON() });
			$('.published-container').html(rendered);
			$('.published-container').show();
		},

    viewPost: function (event){
  		event.preventDefault();
  		event.stopPropagation();
  		var postid = $(event.target).attr('id');
  		window.blog_router.navigate('#post/'+postid, {trigger: true});
  		$('.singleViewContainer').show();
  		// $('.addNewBtn').hide();    WORK ON THIS
  	}


});

		
var SingleView = Backbone.View.extend({
		
		className:'singleContainer',

	 	events: {
     	'click .return' : 'returnHome',
     	'click .deletePostBtn' : 'deletePost'
 		},

		initialize: function(attributes){
  	this.singlePost = this.collection.get(attributes.postid);
  	this.render();
		},

	  render: function (options){
  	var template = Handlebars.compile($('#singleViewTemplate').html());
		var rendered = template(this.singlePost.toJSON());
    this.$el.html(rendered);
    $('.published-container').hide();
  	},

		returnHome: function (event){
			event.preventDefault();
		  window.blog_router.navigate('', { trigger: true });
		  $('.singleViewContainer').hide();
      $('.published-container').show();
   	},

   	 deletePost: function (event) {
    	event.preventDefault();
    	event.stopPropagation();
    	// Confirmation dialogue
    	if (window.confirm("Are you sure you want to delete this post?")) {
      	this.singlePost.destroy({success: function () {
        window.blog_router.navigate('', { trigger: true });
      }});
    }
  }

});

		
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
$("button").on("click", function() {

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

// This is my router. It will react to the URL I visit and run a function based on that
// Right now I only have 2, but I could easily add a lot more.
// Also, both trigger a new view instance currently
var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'singleView',
    'login' : 'loginScreen'
  },

 initialize: function () {
    this.appView = new AppView();
  },

  home: function() {
    var pubView = new PublishedView( { collection: all_posts });
    this.appView.showView(pubView);
  },


  singleView: function(id) {
    var singView = new SingleView({ postid: id, collection: all_posts });
    this.appView.showView(singView);
  },

  loginScreen: function(){
    var logView = new LoginView();
    this.appView.showView(logView);
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

