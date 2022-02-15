#!/bin/bash
echo "Let's start a new project"
read -p "Enter the directory name of the new project: " projectname
mkdir -p $projectname/src/{scss,img,js}
echo "Directories created!"
cd $projectname
touch index.html
cd src/scss/
touch main.scss
cd ../js/
touch app.js
echo "Base files created!"



