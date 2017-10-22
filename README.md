# RNStarterTypeScript
- React Native Starter app with TypeScript
- Based on React Native v0.49.3 & TypeScript v2.5.3
- Inspired by [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
- Includes tsconfig.json & tslint

## Demo
![Watching for Changes](http://g.recordit.co/uzbueRUFfu.gif)

## Setup & Install
```
git clone https://github.com/kyaroru/RNStarterTypeScript.git
npm install
```

## Build & Run
```
npm run start:code // start packager only & watch for code changes & build
run run start:ios // react-native run-ios && watch for code changes & clean + build
run run start:android // react-native run-android && watch for code changes & clean + build
```

## Other npm commands
```
npm test // run jest tests
npm run tsc // compiles the code into "build" folder
npm run clean // clean or remove the "build" folder
npm run build // combination of clean + tsc
npm run lint // run tslint
npm run watch // npm run build with watch
```