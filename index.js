// JustRunMyApp / Docker entrypoint
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'commonjs' } });
require('./src/bot/index.ts');
