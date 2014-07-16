
var PublishedView = Backbone.View.extend({
		
	el:('.published-container'),

	events: {
	'click button.submit':'postBlog'
	},

		initialize: function(){
				this.render();
		} ,
//Rendering page data
		render:function(){
//Passing data to template
			var template = Handlebars.compile( $("#published-template").html() );
			var rendered = template({ posts: model.toJSON() });
			this.el.html( this.template(this.collection) )
		},

		postBlog: function(event){
			event.preventDefault();
			console.log('the button is buttoning!')

			// Grab all form data and defing variables for each to use below and create new instance of your model 
    var temp_post = new Post({
      title:  $('#title').val(),
      content: $('#content').val(),
      author:  $('#author').val(),
      tags: $('#tags').val(),
      //tags: tags.replace(/\s+/g, '').split(','),
      status: 'Published',
      date: new Date().toJSON().slice(0,10)
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