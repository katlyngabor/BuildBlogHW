var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'singleView',
    'login/' : 'logInScreen'
  },

 initialize: function() {
    this.appView = new AppView();
  },

  home: function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
      var pubView = new PublishedView( { collection: all_posts });
      this.appView.showView(pubView);
    } else {
      window.blog_router.navigate('login/', { trigger: true });
    }
  },

  singleView: function(id) {
    var currentUser = Parse.User.current();
    if (currentUser) {
    var singView = new SingleView({ postid: id, collection: all_posts });
    this.appView.showView(singView);
    } else {
      window.blog_router.navigate('login/', { trigger: true });
    }
  },

  logInScreen: function(){
     var currentUser = Parse.User.current();
     if (currentUser) {
      window.blog_router.navigate('', { trigger: true });
    } else {
    var logView = new LogInView( {collection: all_posts});
    this.appView.showView(logView);
    }
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

