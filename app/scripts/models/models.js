var Post = Parse.Object.extend({

	className: 'PostItem',

	idAttribute: "objectId",

	initialize: function() {
		var title = this.get('title');
		console.log( title + ' has been added to your posts.');
	}

});

var Posts = Parse.Collection.extend ({

	model: Post
	// url:"http://tiy-atl-fe-server.herokuapp.com/collections/katlynsblog"

});

// var all_posts = new Posts();


// var Student = Backbone.Model.extend ({
 
//   defaults: {
//     name: '',
//     location: 'Atlanta',
//     awesome: true
//   },
 
//   idAttribute: "_id",
 
//   initialize: function () {
//     var name = this.get('name');
//     console.log( name + ' has been added to your list of students.');
//   }
 
// });
 
