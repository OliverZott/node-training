# TS and Node.js

## Setup Node.js with TypeScript

- `tsc --init` to create **tsconfig.json**
- `npm init -y` to create **package.json**

- `npm install --save express` to install Express.js
- `npm install --save body-parser` to install body-parser for parsing request bodies
- `npm install --save-dev @types/express @types/node` to install Express.js type definitions

## Run Dev / Prod

### Dev

- `npm i -D tsx` to install tsx for running TypeScript files directly
- `tsx watch src/app.ts` to run the TypeScript file with automatic restarts on changes

Alternative:

- `tsc --watch` to compile TypeScript files on changes
- `node --watch dist/index.js` to run the compiled JavaScript file

### Production

- `tsc` to compile TypeScript files to JavaScript
- `node dist/index.js` to run the compiled JavaScript file

PM2 for production process management:

- `npm install -g pm2` to install PM2 globally
- `pm2 start dist/index.js --name "app-name"` to start the application with PM2
- `pm2 monit` to monitor the application

### Publish package

- [node docu](https://nodejs.org/en/learn/typescript/publishing-a-ts-package)
