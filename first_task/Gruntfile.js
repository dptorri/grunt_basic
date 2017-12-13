module.exports = function(grunt){

grunt.registerTask('temps_F_C','converts °F to °C and °C to °F for a number given.', function(num){
    var result = Number(num);
    
    grunt.log.writeln('If you enter a °C temperature of '+result+'the °F value would be'+((result*9)/5)+32);
    grunt.log.writeln('but if '+result+'is in °F, then the value in °C would be'+((result-32)*5)/9);
 });
}
 