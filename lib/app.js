var exec = require('child_process').exec;


exports.add = function(a, b){
	return a + b;
};

exports.pad = function(string, len) {
	var tem = new Array(len);
	return string + tem.join(' ');
};

exports.ls = function(cb) {
	var platform = process.platform;
	if(platform == 'win') {
		exec('dir', cb);
	}
};