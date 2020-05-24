#! /bin/bash

rm -f db/scripts/migration.sql

cats=()
find ./blog/pages/source-posts -regex '.*\.md' | while read path; 
do 
    sub_path=${path##./blog/pages/source-posts/}
    file_name=${path##*/}
    file_name=${file_name%.md}
    category=${sub_path%%/*}
    # insert new category if not yet
    if [[ ! "${cats[*]}" =~ "$category" ]]; then
        cats+=("$category")
        echo "INSERT INTO category(category_name) VALUES ('$category');" >> db/scripts/migration.sql
    fi

    # get the tile started with #
    title=$(grep -m 1 -e '^# .*' $path)
    title=${title:-$file_name}
    title=${title:2}
    
    # insert post
    echo "INSERT INTO post(title, description, author, file_name, category)
    VALUES('$title', '$title', '$USER', '$sub_path', '$category');" >> db/scripts/migration.sql
done
