
var PublishedView = Backbone.View.extend({
		
		el:'.modal',

	 	events: {
     	'click .submit' : 'postBlog'
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
			this.$el.find($('.published-container')).html(rendered);
		},

		postBlog: function(event){
			event.preventDefault();
			console.log('the button is buttoning!');


			// Grab all form data and define variables for each to use below and create new instance of your model 
    	var temp_post = new Post({
	      title:  $('.title-container').val(),
	      content: $('.create-post-container').val(),
	      author:  $('.author-container').val(),
	      // tags: $('.tags').val(),
	      // tags: tags.replace(/\s+/g, '').split(','),
	      status: 'Published',
	      // date: new Date().toJSON().slice(0,10)
	    });
  
    // Save your model; this will save it to the database and re-render the page
    	all_posts.add(temp_post).save();

   }

});

		

		// events: {
  //   'click button#openEssay':'openEssay'
  // }



// var StudentView = Backbone.View.extend({
 
//   template: function(model){
//     return _.template($('#student_list').html());
//   },
 
//   el: $('.hero-unit ul'),
 
//   initialize: function(){
//     this.render();
//     this.collection.on('change', this.render, this);
//     this.collection.on('destroy', this.render, this);
//   },
 
//   render: function(){
//     this.$el.html( this.template(this.collection) )
//   }
 
// });