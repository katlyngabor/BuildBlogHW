var PublishedView = Backbone.View.extend({
		

	 	events: { 
     	'click a' : 'viewPost',
     	'click .logOutBtn' : 'logOut'
 		},

		initialize: function(){

			var currentUser = Parse.User.current();
			if (currentUser) {
				console.log(currentUser.get('username') + ' is logged in');
  			// window.blog_router.navigate('', { trigger: true });
  			this.render();
				this.collection.on('change', this.render, this);
				this.collection.on('destroy',this.render, this);
				this.collection.on('add', this.render,this);
				$('header').removeClass('hidden').addClass('shown');	
			} else {
   			window.blog_router.navigate('login/', { trigger: true });
			}

		},

		render:function(){

			var template = Handlebars.compile($("#published-template").html());
			var rendered = template({ posts:this.collection.toJSON() });
			$('.published-container').html(rendered);
			$('.userBox').hide();
			$('.published-container').show();
			// $('.loginViewContainer').hide();
		},

    viewPost: function (event){
  		event.preventDefault();
  		event.stopPropagation();
  		var postid = $(event.target).attr('id');
  		window.blog_router.navigate('#post/'+postid, {trigger: true});
			// $('header').removeClass('shown').addClass('hidden');
  		$('.singleViewContainer').show();
  		// $('.addNewBtn').hide();    WORK ON THIS
  	},

  	logOut: function(e){
  		e.preventDefault();
  		e.stopPropagation();
  		console.log('logout button clicked');
  		Parse.User.logOut();	
  		window.blog_router.navigate('login/', { trigger: true });
  	}


});

		