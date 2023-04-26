#!/bin/bash

# Check if the required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input_file word_list"
    exit 1
fi

input_file=$1
word_list=$2

# Create the "indexes" directory if it doesn't exist
mkdir -p indexes

# Read the list of words and process each word
while read -r word; do
    # Replace all occurrences of "GESTORA" with the current word and save to a new file
    word_with_underscores="${word// /_}"

    sed "s/GESTORA/$word_with_underscores/g" "$input_file" > "indexes/index_$word_with_underscores.md"
done < "$word_list"

