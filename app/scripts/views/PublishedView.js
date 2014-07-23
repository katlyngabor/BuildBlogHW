var PublishedView = Backbone.View.extend({
		
		el:'.wrapper',

	 	events: { 
     	'click a' : 'viewPost'
 		},

		initialize: function(){
				this.render();
				this.collection.on('change', this.render, this);
				this.collection.on('destroy',this.render, this);
				this.collection.on('add', this.render,this);
		},
//Rendering page data
		render:function(){
//Passing data to template
			var template = Handlebars.compile($("#published-template").html());
			var rendered = template({ posts:this.collection.toJSON() });
			$('.published-container').html(rendered);
		},

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

		