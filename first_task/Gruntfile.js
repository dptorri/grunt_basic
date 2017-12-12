module.exports = function(grunt){

    grunt.registerTask('add_num', function(first, second){
    var result = Number(first) + Number(second);
        if(isNaN(Number(first)) || isNaN(Number(second)) ){
            grunt.warn('Both parameters must be numbers.');
            }

    grunt.log.writeln(first + ' + ' + second + ' = ' + result);
    });
    }