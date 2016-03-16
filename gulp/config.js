const jsDir = 'app/assets/javascript';
const tsDir = 'typescript';
const tsSrc = `${tsDir}/**/*.ts`,

module.exports = {
    js: [
        `${jsDir}/**/*.js`,
        `${jsDir}/**/*.js.map`
    ],
    ts: {
        entry: `${tsDir}/index.ts`,
        options: {
            target: 'ES5',
            module: 'ES2015'
        },
        dest: jsDir
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
