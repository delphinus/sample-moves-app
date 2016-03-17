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
            target: 'es5',
            experimentalDecorators: true
        },
        dest: jsDir,
        bundle: 'bundle.js'
    },
    tslint: {
        src: [
            tsSrc,
            `!${tsDir}/typings/**/*.ts`
        ],
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
