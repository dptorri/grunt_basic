module.exports = function(grunt){

    grunt.registerTask('add_num', function(first, second){
    var result = Number(first) + Number(second);
        if(isNaN(Number(first)) || isNaN(Number(second)) ){
            grunt.fatal('Both parameters must be numbers.');
            }

    grunt.log.writeln(first + ' + ' + second + ' = ' + result);
    });
    }