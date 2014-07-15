var Posts = Backbone.Model.extend({

	defaults:{
		title: '',
		date: '',
		author: '',
		content: '',
		tags: '',
		status: 'published'
	},

	idAttribute: "_id",

	initialize:function() {
		var title = this.get('title');
		console.log( title + 'has been added to your posts.');
	}

});