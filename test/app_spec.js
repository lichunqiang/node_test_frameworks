var should = require('should');
var app = require('../lib/app.js');

describe('app.add function', function(){

		it('should output two multi result', function(){
			var a = 1, b = 2;
			var output = app.add(1, 2);
			output.should.equal(a + b);
		});

});


describe('app.pad function', function(){

		it('should add blank to string', function(done){
			var input = 'test';
			var output = app.pad(input, 2);

			output.should.equal(input + ' ');

			done();
		});
});

describe('app.ls function', function(){

	it('should list dir files', function(done){
		console.log('teste')
		app.ls(function(){
			console.log(arguments);
		});
		done();
	});
});