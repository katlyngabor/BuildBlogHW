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
    $('header').removeClass('shown').addClass('hidden');  
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

		