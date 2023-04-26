#!/bin/bash

# Find folders starting with underscore
folders=$(find . -type d -name '_*')

# Loop through the folders
for folder in $folders; do
  # Find markdown files 
  files=$(find "$folder" -type f -name "*.md") 

  # Loop through the files
  for file in $files; do
    echo $file
    # Add the tag line after the fourth line
    sed -i '4 a\tags: Carta' "$file"
  done
done

