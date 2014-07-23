var SingleView = Backbone.View.extend({
		
		// el:'.singleViewContainer',

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
  	},

		returnHome: function (event){
			event.preventDefault();
		  window.blog_router.navigate('', { trigger: true });
		  $('.published-container').show();
		  $('.singleViewContainer').hide();

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

 // deleteWhiskey: function (event) {
 //    event.preventDefault();
 //    event.stopPropagation();
 //    // Standard JS confirm dialogue
 //    if (window.confirm("Are you sure?")) {
 //      this.whiskey.destroy({success: function () { // and one more time :) - btw this destroys my this.whiskey object
 //        window.whiskey_router.navigate("", { trigger: true }); // E.T. Phone Home (route me home)
 //      }});
 //    }
 //  }

});

		