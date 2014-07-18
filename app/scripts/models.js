var Post = Backbone.Model.extend({


	idAttribute: "_id",

	initialize:function() {
		console.log(this)
		var title = this.get('title');
		console.log( title + 'has been added to your posts.');
	}

});

var Posts = Backbone.Collection.extend ({

	model: Post,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/katlynsblog"

});



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
 
