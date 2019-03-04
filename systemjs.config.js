/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/',
      'local:': 'node_modules/',
      'pl:': 'https://unpkg.com/'

    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'src',

      // angular bundles
      'angular': 'local:angular/angular.js',
      '@angular/core': 'npm:@angular/core@5/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@5/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@5/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@5/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'local:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'local:@angular/http/bundles/http.umd.js',
      '@angular/router': 'local:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'local:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'local:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'local:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'local:@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs@5.0.1',
      'angular-in-memory-web-api': 'pl:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ts':                        'local:plugin-typescript/lib/plugin.js',
      'typescript':                'local:typescript/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      src: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    },
    meta: {
      'angular': {
        format: 'global',
      },
      /*'angular-route': {
        format: 'global',
      },*/
    } 
  });

})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
