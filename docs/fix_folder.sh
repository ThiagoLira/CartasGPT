for folder in _*; do
    # Check if the folder contains any markdown files
    if ls "$folder"/*.md >/dev/null 2>&1; then
        # Iterate over all markdown files in the folder
        for md_file in "$folder"/*.md; do
            # Replace spaces with underscores in the "category: " line and update the file
            awk -v n=4 'NR == n {gsub(/ /, "_", $0); sub("category:_", "category: ", $0)} 1' "$md_file" > "$md_file.tmp" && mv "$md_file.tmp" "$md_file"
        done
    fi
done


