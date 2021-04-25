const gulp = require('gulp');
const fs = require('fs');
const del = require('del');

const argv = require('yargs').argv;
const formatDefault = ['pug', 'sass'];
const isCreateComponent = ((argv.create === undefined)) ? false : String(argv.create);
const isRemoveComponent = ((argv.remove === undefined)) ? false : String(argv.remove);

gulp.task('component', function () {
    function _writeFile(componentName, format) {
        let fileContent;
        if(format !== 'pug'){
            fileContent = `/*${componentName}*/`
        } else {
            fileContent = `//-${componentName}`
        }
        fs.writeFile(`./src/components/${componentName}/${componentName}.component.${format}`, fileContent, (err) => {
            if (err) throw err;
            console.log(`The file ${componentName}.component.${format} was succesfully saved!`);
        });
    }

    async function _create() {
        if (isCreateComponent && isCreateComponent !== "true") {
            let componentName = argv.create;
            fs.mkdirSync('./src/components/' + componentName);

            for (let i = 0; i < formatDefault.length; i++) {
                _writeFile(componentName, formatDefault[i]);
            }

            if (argv.js) {
                _writeFile(componentName, 'js');
            }
        } else if (isRemoveComponent && isRemoveComponent !== "true") {
            console.log(isRemoveComponent);
            del(`./src/components/${argv.remove}`);
        }
        else {
            throw console.error('<name> dosn`t exist use yarn "component -flag" <NAME>');
        }
    }
    return _create();
});

// ex. gulp component --create || gulp component --create <name> --js (if you need js use flag --js) 
// ex. gulp component --remove <name>