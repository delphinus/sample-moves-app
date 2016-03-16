const jsDir = 'app/assets/javascripts';
const tsDir = 'typescript';
const tsSrc = `${tsDir}/**/*.ts`;

module.exports = {
    clean: {
        js: [
            `${jsDir}/**/*.js`,
            `${jsDir}/**/*.js.map`
        ]
    },
    ts: {
        entry: `${tsDir}/index.ts`,
        options: {
            target: 'ES5',
            module: 'ES2015'
        },
        dest: jsDir,
        bundle: 'bundle.js'
    },
    tslint: {
        src: tsSrc,
        lint: {
            configuration: `${tsDir}/tslint.json`
        },
        report: {
            reportLimit: 10
        }
    },
    watch: {
        ts: tsSrc,
        watching: false
    }
};
