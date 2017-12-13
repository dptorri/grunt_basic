module.exports = function(grunt){

grunt.registerTask('temps_F_C','converts °F to °C and °C to °F for a number given.', function(num){
    var description = 'description fo the task: temps_F_C converts(num) °F to °C and °C to °F for a number given.';
    var result = Number(num);
    var result_c = (((result-32)*5)/9);
    var result_f = (((result*9)/5)+32);
    grunt.log.writeln(description);
    grunt.log.writeln('If you entered a  temperature of '+result+'°C then the °F value would be '+result_f+'°F');
    grunt.log.writeln(' but if '+result+' is in °F, then the value in °C would be '+result_c+'°C');
 });
}
 