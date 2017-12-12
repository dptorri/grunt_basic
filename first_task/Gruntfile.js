module.exports = function(grunt){
    grunt.registerTask('say_hi', function(name){
       // console.log('Hola this is a Grunt-comment.');
       grunt.log.writeln('Hi '+name+'good to meet you!');
        });
    }