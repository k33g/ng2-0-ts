#Ng2-0-TS

Ng2-0-TS is a "walking skeleton" project build to discover Angular2.* with TypeScript.
(Dynamic TypeScript Transpilation)

##Libraries

- [https://code.angularjs.org/2.0.0-alpha.34/angular2.min.js](https://code.angularjs.org/2.0.0-alpha.34/angular2.min.js)
- [https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js](https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js)
- [https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js.map](https://raw.githubusercontent.com/systemjs/systemjs/master/dist/system.js.map)
- [https://raw.githubusercontent.com/jmcriffey/bower-traceur-runtime/master/traceur-runtime.min.js](https://raw.githubusercontent.com/jmcriffey/bower-traceur-runtime/master/traceur-runtime.min.js)
- [https://raw.githubusercontent.com/jmcriffey/bower-traceur-runtime/master/traceur-runtime.min.map](https://raw.githubusercontent.com/jmcriffey/bower-traceur-runtime/master/traceur-runtime.min.map)
- [https://raw.githubusercontent.com/Microsoft/TypeScript/master/lib/typescript.js](https://raw.githubusercontent.com/Microsoft/TypeScript/master/lib/typescript.js)

##Install

    git clone https://github.com/k33g/ng2-0-ts.git

##Play

    http-server public
    
##Transpilation

If you want to transpile TypeScript source code before (instead dynamic transpilation):

- type `tsc public/**/*.ts --watch --target ES5 --experimentalDecorators --module AMD`
- change `System.import('js/hello.ts')` by `System.import('js/hello.js')`
- you don't need `<script src="js/vendors/typescript.js"></script>` anymore
