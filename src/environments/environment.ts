// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ///*DEVLOCAL*/baseUrl: 'http://localhost:8085/api/'
  ///*DEV*/baseUrl: 'http://172.21.141.123:7001/dvp/api/'
  /*QA*/baseUrl:'https://172.28.94.124:7002/dvp/api/'
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
