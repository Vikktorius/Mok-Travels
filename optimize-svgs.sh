#!/bin/bash

# Optimize all .svg files in the current directory and subdirectories

echo "🔍 Searching for SVG files..."

find . -type f -name "*.svg" | while read -r svg_file; do
    echo "⚙️ Optimizing: $svg_file"
    svgo "$svg_file" --multipass --pretty --quiet
done

echo "✅ SVG optimization complete!"
