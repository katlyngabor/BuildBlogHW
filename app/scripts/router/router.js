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
    var pubView = new PublishedView( { collection: all_posts });
    this.appView.showView(pubView);
  },

  singleView: function(id) {
    var singView = new SingleView({ postid: id, collection: all_posts });
    this.appView.showView(singView);
  },

  logInScreen: function(){
    var logView = new LogInView( {collection: all_posts});
    this.appView.showView(logView);
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

