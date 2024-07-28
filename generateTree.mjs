import { readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateTree(dir, indent = '') {
    const files = readdirSync(dir);

    files.forEach((file, index) => {
        const filePath = join(dir, file);
        const isLast = index === files.length - 1;
        const isDir = statSync(filePath).isDirectory();

        // Skip node_modules directory
        if (file === 'node_modules') return;
        if (file === '.git') return;

        console.log(`${indent}${isLast ? '└──' : '├──'} ${file}`);

        if (isDir) {
            generateTree(filePath, `${indent}${isLast ? '    ' : '│   '}`);
        }
    });
}

// Starting directory - Use current directory since script is in /src
const startDir = __dirname;

if (existsSync(startDir)) {
    generateTree(startDir);
} else {
    console.log('The directory does not exist.');
}
