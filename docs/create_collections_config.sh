#!/bin/bash

# Check if the input file exists
if [ ! -f gestoras.txt ]; then
  echo "File gestoras.txt not found!"
  exit 1
fi

# Create or empty the output file
output_file="_config_footer.yml"
> "$output_file"

# Read the input file line by line
while IFS= read -r line; do
  # Replace spaces with underscores
  gestora=$(echo "$line" | tr ' ' '_')

  # Substitute GESTORA with the current line
  cat << EOF >> "$output_file"
  $gestora:
    permalink: /:collection/:path.html
    index_permalink: /$gestora/
    output: true
EOF
done < gestoras.txt
