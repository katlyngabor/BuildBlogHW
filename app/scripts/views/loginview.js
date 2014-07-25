var LogInView = Backbone.View.extend({

	el:'.logInViewContainer',

	events: {
		'click .newUserSelect' : 'newUser',
		'click .returningUserSelect' : 'returningUser',
		'click .logInBtn' : 'logIn',
		'click .signUpBtn' : 'signUp'
	},

	initialize: function(){
		// $('.signUpBox').hide();
		// $('.logInBox').hide();
		// $('header').hide();
		(this).render();
	},

	render: function(){
		$('.published-container').hide();
		// $('.userBox').show();
	},

	newUser: function(e){
		e.preventDefault();
		$('.logInBox').hide();
		$('.signUpBox').show();
		$('.userBox').hide();

	},

	returningUser: function(e){
		e.preventDefault();
		$('.logInBox').show();
		$('.signUpBox').hide();
		$('.userBox').hide();
	},

	logIn: function(){

		Parse.User.logIn($('#logInInput').val(), $('#passwordInput').val(), {
		  success: function(user) {
		 		window.blog_router.navigate('', { trigger: true });
		  },
		  error: function(user, error) {
		    // The login failed. Check error to see why.
		  }
		});

	},

	signUp: function(){
		var user = new Parse.User();
		user.set("username", $('#signUpInput').val() );
		user.set("password", $('#newPasswordInput').val() );
		 
		 
		user.signUp(null, {
		  success: function(user) {
		    window.blog_router.navigate('', { trigger: true });
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
	});

	}


});






