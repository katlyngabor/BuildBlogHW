var Post = Backbone.Model.extend({


	idAttribute: "_id",

	initialize:function() {
		console.log(this)
		var title = this.get('title');
		console.log( title + 'has been added to your posts.');
	}

});

var Posts = Backbone.Collection.extend ({

	model: Post,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/katlynsblog"

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
		
		el:'.wrapper',

	 	events: { 
     	'click a' : 'viewPost'
 		},

		initialize: function(){
				this.render();
				this.collection.on('change', this.render, this);
				this.collection.on('destroy',this.render, this);
		},
//Rendering page data
		render:function(){
//Passing data to template
			var template = Handlebars.compile($("#published-template").html());
			var rendered = template({ posts:this.collection.toJSON() });
			$('.published-container').html(rendered);
		},

		// postBlog: function(event){
		// 	event.preventDefault();
		// 	console.log('the button is buttoning!');
  
  //   // Save your model; this will save it to the database and re-render the page
  //   all_posts.add(temp_post).save();

  //   	$("form")[0].reset();

  //   },


    viewPost: function (event){
    	console.log('you got here');
  		event.preventDefault();
  		event.stopPropagation();
  		var postid = $(event.target).attr('id');
  		window.blog_router.navigate('#post/'+postid, {trigger: true});
  		$('.published-container').hide();
  		$('.singleViewContainer').show();
  	}


});

		
var SingleView = Backbone.View.extend({
		
		el:'.singleViewContainer',

	 	events: {
     	'click .return' : 'returnHome'
     	// 'click .deletePostBtn' : 'deletePost'
 		},

		initialize: function(attributes){
  	this.singlePost = this.collection.get(attributes.postid);
  	this.render();
		},

	  render: function (options){
  	var template = Handlebars.compile($('#singleViewTemplate').html());
		var rendered = template(this.singlePost.toJSON());
    this.$el.html(rendered);
  	},

		returnHome: function (event){
			event.preventDefault();
		  window.blog_router.navigate('', { trigger: true });
		  $('.published-container').show();
		  $('.singleViewContainer').hide();

   	},

  //  	 deletePost: function (event) {
  //   	event.preventDefault();
  //   	event.stopPropagation();
  //   	// Confirmation dialogue
  //   	if (window.confirm("Are you sure you want to delete this post?")) {
  //     	this.singlePost.destroy({success: function () {
  //       window.blog_router.navigate('', { trigger: true });
  //     }});
  //   }
  // }

});

		
// Create an instance of my Collection
var all_posts = new Posts();


// Grab all my data from my server
// After it's complete, create a new view with data
all_posts.fetch().done(function () {
  window.blog_router = new BlogRouter();
	Backbone.history.start();
});
 
 
// Something happens
$("button").on("click", function() {

  // State changes
  $("body").toggleClass("dialogIsOpen");

});


$('.modal').on('submit', function (event) {
  event.preventDefault();

  var temp_post = new Post({
    title: $('.title-container').val(),
    author: $('.author-container').val(),
    content: $('.create-post-container').val()
  });

  all_posts.add(temp_post).save();

  // $(this).trigger('reset');
  
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
    'post/:id' : 'singleView'
  },

  home: function() {
    new  PublishedView( { collection: all_posts });
  },


  singleView: function(id) {
    new SingleView({ postid: id, collection: all_posts });
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

