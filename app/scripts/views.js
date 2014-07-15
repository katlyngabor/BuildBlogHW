
var PublishedView = Backbone.View.extend({
		initialize: function(){
				this.render();
		},
		render:function(){
			var template = Handlebars.compile( $("#published-template").html() );
			var rendered = template({ posts: model.toJSON() });
			this.el.html( template );
		}
});


// SearchView = Backbone.View.extend({
//     initialize: function(){
//         this.render();
//     },
//     render: function(){
//         // Compile the template using Handlebars
//         var template = Handlebars.compile( $("#search_template").html() );
//         // Load the compiled HTML into the Backbone "el"
//         this.el.html( template );
//     }
// });

// var template = Handlebars.compile($('#student_template').html());
 
// // Pass the `data` to my compiled template to render it
// var rendered = template(data);
 
// // Choose a spot on my page and dump my rendered template HTML into it.
// $('#student_list').html(rendered);



// var View = Backbone.View.extend({
 
//   template: function(model){
//     return _.template($('#girls_list').html());
//   },
 
//   el: $('.container'),
 
//   initialize: function(){
//     this.render();
//     this.collection.on('change', this.render, this);
//     this.collection.on('destroy', this.render, this);
//   },
 
//   render: function(){
//     this.$el.html( this.template(this.collection) )
//   }
 
// });