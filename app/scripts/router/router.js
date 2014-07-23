// This is my router. It will react to the URL I visit and run a function based on that
// Right now I only have 2, but I could easily add a lot more.
// Also, both trigger a new view instance currently
var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'singleView'
  },

 // initialize: function () {
 //    this.appView = new AppView();
 //  },

  home: function() {
    var pubView = new PublishedView( { collection: all_posts });
    // this.appView.showView(pubView);
  },


  singleView: function(id) {
    var singView = new SingleView({ postid: id, collection: all_posts });
    // this.appView.showView(singView);
  }

});

// id in 'post/:id' : 'singleView' is the same as id in singleView: function(id)

