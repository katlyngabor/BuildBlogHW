// Get and Compile My Template
var template = Handlebars.compile($('published-template').html());

// Pass the `data` to my compiled template to render it
var rendered = template(data);

// Choose a spot on my page and dump my rendered template HTML into it.
$('.published-container').html(rendered);

