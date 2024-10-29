import os
import json

output_file = 'src/content-selection/selectedContent.json'

# Read IDs
with open('src/content-selection/selectedIDs.txt', 'r',  encoding="utf-8") as ID_file:
    IDs = ID_file.read().splitlines()

filepaths = []
path = 'src/content-sources/oatutor/content-pool'
suffix = 'DefaultPathway.json'
absolute_root = os.path.abspath(path)
#ex<ample filepath: src\content-sources\oatutor\content-pool\a0a04b1divmonomial2\steps\a0a04b1divmonomial2a\tutoring\a0a04b1divmonomial2aDefaultPathway.json

# generate all ID filepaths
for ID in IDs:
    file_name = os.path.join(absolute_root, ID[:-1], 'steps', ID, 'tutoring', ID + suffix)
    filepaths.append(file_name)


# Write to JSON output file
all_data = []
with open(output_file, 'w', encoding="utf-8") as outfile:
    for source_file in filepaths:
        # Read the contents of the source file
        if os.path.isfile(source_file):
            with open(source_file, 'r') as file:
                data = json.load(file)
                all_data.extend(data)

    json.dump(all_data, outfile,  ensure_ascii=False, indent=4)


print(f"Contents have been written to {output_file}.")
