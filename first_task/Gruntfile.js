module.exports = function(grunt){
//Task: add_num ; adds 2 numbers and handles NaN cases
    grunt.registerTask('add_num', function(first, second){
        var result = Number(first) + Number(second);
            if(isNaN(Number(first)) || isNaN(Number(second)) ){
                grunt.fatal('Both parameters must be numbers.');
                }
            grunt.log.writeln(first + ' + ' + second + ' = ' + result);
    });
//Task: say_hi ; says Hi given a variable $grunt say_hi:Daniel
    grunt.registerTask('say_hi', function(name){
        grunt.log.writeln('Hi '+name+' good to meet you!');
    });
//Task: chained unnamed task displays say_hi and add_num
        grunt.registerTask('default', ['say_hi:Daniel', 'add_num:2:3']);
    
    }