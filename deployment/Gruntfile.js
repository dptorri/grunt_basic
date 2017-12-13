module.exports = function(grunt) {
grunt.config.init({
    copyFiles: {
        options: {
        workingDirectory: 'working',
        manifest: ['index.html', 'css/style.css', 'js/script.js']
        }
    },
        deleteFiles: {
            options: {
            workingDirectory: 'working'
            }
        }
});
grunt.registerTask('createFolder', 'Create the working folder', function(){
    grunt.config.requires('copyFiles.options.workingDirectory');    
	
    grunt.file.mkdir(grunt.config.get('copyFiles.options.workingDirectory'));
});

grunt.registerTask('deleteFolder', 'Delete the working folder', function(){
grunt.config.requires('deleteFiles.options.workingDirectory');    

grunt.file.delete(grunt.config.get('deleteFiles.options.workingDirectory'));
});


grunt.registerTask('copyFiles', function(){
var files, workingDirectory;
grunt.config.requires('copyFiles.options.manifest');
grunt.config.requires('copyFiles.options.workingDirectory');
files = grunt.config.get('copyFiles.options.manifest'); workingDirectory =
grunt.config.get('copyFiles.options.workingDirectory');
files.forEach(function(file) {
var destination = workingDirectory + '/' + file;
grunt.log.writeln('Copying ' + file + ' to ' + destination);
grunt.file.copy(file, destination);
});
});

grunt.registerTask('deploy', 'Deploys files',
['deleteFolder', 'createFolder', 'copyFiles']);

}