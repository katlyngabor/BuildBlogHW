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
  	}


});

		