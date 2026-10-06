$('body').terminal(
{
	hello: function(arg) {
		this.echo('Hello, ' + arg + '. Welcome to the terminal.');
	}, 
	
	help: function() {
		this.echo('Available commands:\n' +
				'- about\n' + '\t+ Gives info about the site.\n' +
				'- help [opt]\n' + '\t+ Lists available commands.\n' +
				'- media <arg>\n'
		);
	},
	
	help: function(arg) {
		if (what === 'info') {
			this.echo('Info test success');
		}
	},
	
}, {
	checkArity: false,
	greetings: greetings.innerHTML
}
);