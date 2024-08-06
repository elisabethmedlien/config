const fs = require('fs');
const path = require('path');

// Paths to the source files (modify if needed)
const sourceFiles = [
  path.join(process.env.HOME, '.p10k.zsh'),
  path.join(process.env.HOME, '.zshrc'),
  path.join(process.env.HOME, '.gitconfig')
];

// Destination directory (current directory + '/config_files')
const destinationDir = path.join(process.cwd(), 'config_files');

sourceFiles.forEach(sourceFile => {
  const destinationFile = path.join(destinationDir, path.basename(sourceFile));

  // Copy the file
  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error(`Error copying file ${sourceFile}:`, err);
    } else {
      console.log(`File ${sourceFile} copied successfully to ${destinationFile}`);
    }
  });
});