$('body').terminal(
{
	hello: function(arg) {
		this.echo('Hello, ' + arg + '. Welcome to the terminal.');
	}, 
	
	help: function(arg) {
		this.echo('Available commands:\n' +
				'- about\n' + '\t+ Gives info about the site.\n' +
				'- help [opt]\n' + '\t+ Lists available commands.\n' +
				'- media <arg>\n'
		);
	},
	
	help: function(arg) {
		if (what === 'bruh') {
			this.echo('Available commands:\n' +
					'- about\n' + '\t+ Gives info about the site.\n' +
					'- help [opt]\n' + '\t+ Lists available commands.\n' +
					'- media <arg>\n'
			);
		}
	}
}, {
	checkArity: false,
	greetings: greetings.innerHTML
}
);