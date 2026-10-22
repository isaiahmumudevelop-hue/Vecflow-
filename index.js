#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const pyScript = path.join(__dirname, 'vecflow');
const pyProcess = spawn('python3', [pyScript, ...process.argv.slice(2)], {
    stdio: 'inherit'
});

pyProcess.on('close', (code) => {
    process.exit(code);
});
