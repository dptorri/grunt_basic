module.exports = function(grunt){

    grunt.registerTask('add_num', function(first, second){
    var result = Number(first) + Number(second);
    grunt.log.writeln(first + ' + ' + second + ' = ' + result);
    });
    }