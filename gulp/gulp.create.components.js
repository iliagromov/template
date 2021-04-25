const gulp = require('gulp');
const fs = require('fs');
const gulpif = require('gulp-if');

var argv = require('yargs').argv;
const pug = (process.argv.indexOf('-pug') !== -1);
var isCreateComponent = (argv.create === undefined) ? false : true;
gulp.task('component', function () {
    // console.log(isCreateComponent);

    // console.log(argv.pug);       
    // console.log(argv.sass);       
    // console.log(argv.js);
    async function _create() {
        if (argv.create) {
            // if(argv.create){} //bool
            let componentName = argv.create;
            console.log(componentName);
            fs.mkdirSync('./src/components/' + componentName);
            // let filepathPug = ;
            var fileContent = "Hello World!";
            // for(let i = 0; i < 2; i++){

            // }
            fs.writeFile('./src/components/'+componentName+'/'+componentName+'.component.pug', '//-'+componentName, (err) => {
                if (err) throw err;
            
                console.log("The file was succesfully saved!");
            });
            fs.writeFile('./src/components/'+componentName+'/'+componentName+'.component.sass', '/*'+componentName+'*/', (err) => {
                if (err) throw err;
            
                console.log("The file was succesfully saved!");
            });

            if (argv.js) {
                console.log(argv.js);
                fs.writeFile('./src/components/'+componentName+'/'+componentName+'.component.js', '/*'+componentName+'*/', (err) => {
                    if (err) throw err;
                
                    console.log("The file was succesfully saved!");
                });
            }
        } else {
            console.log('use flag --create <name>');
        }
    }
    return _create();
});
//ex. gulp component --create <name>
//if you need js use flag --js
// ex. gulp component --create <name> --js