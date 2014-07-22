// This is my router. It will react to the URL I visit and run a function based on that
// Right now I only have 2, but I could easily add a lot more.
// Also, both trigger a new view instance currently
var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'singleView'
  },

  home: function() {
    new  PublishedView( { collection: all_posts });
  },


  singleView: function(id) {
    new SingleView({ postid: id, collection: all_posts });
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

