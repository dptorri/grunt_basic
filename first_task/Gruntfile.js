module.exports = function(grunt){

    grunt.registerTask('add_num', function(first, second){
        var result = Number(first) + Number(second);
            if(isNaN(Number(first)) || isNaN(Number(second)) ){
                grunt.fatal('Both parameters must be numbers.');
                }
            grunt.log.writeln(first + ' + ' + second + ' = ' + result);
    });
    grunt.registerTask('say_hi', function(name){
        grunt.log.writeln('Hi '+name+' good to meet you!');
    });
        grunt.registerTask('default', ['say_hi:Daniel', 'add_num:2:3']);
    }