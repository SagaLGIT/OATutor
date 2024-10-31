import os
import json

# output_file = 'src/content-selection/selectedContent.json'

# Read IDs
with open('src/content-selection/selectedIDs.txt', 'r',  encoding="utf-8") as ID_file:
    IDs = ID_file.read().splitlines()

filepaths = {}

pool_2_path = 'src/content-selection/content-pool-2'
suffix = 'DefaultPathway.json'
write_root = os.path.abspath(pool_2_path)
#ex<ample filepath: src\content-sources\oatutor\content-pool\a0a04b1divmonomial2\steps\a0a04b1divmonomial2a\tutoring\a0a04b1divmonomial2aDefaultPathway.json

# generate all write ID filepaths and store in dict
for ID in IDs:
    file_name = os.path.join(write_root, ID[:-1], 'steps', ID, 'tutoring', ID + suffix)
    filepaths[ID] = file_name

# get edited data
edited_qs_path = 'src/content-selection/qualityContent.json' 
edited_root = os.path.abspath(edited_qs_path)
with open(edited_root, 'r') as file:
    edited_data = json.load(file)

# take each ID and write over the edited contents with the same ID on that leaf file

# C:\Users\sagal\Documents\github\Berkeley\OATutor\src\content-selection\content-pool-2\aabf119factor16\steps\aabf119factor16a\tutoring\aabf119factor16aDefaultPathway.json
# 'C:\\Users\\sagal\\Documents\\github\\Berkeley\\OATutor\\src\\content-pool-2\\aabf119factor16\\steps\\aabf119factor16a\\tutoring\\aabf119factor16aDefaultPathway.json'
for ID in IDs:
    with open(filepaths[ID], 'w') as write_file:
        temp_data = []
        for item in edited_data:
            if item["id"].split('-')[0] == ID:
                temp_data.append(item)
        json.dump(temp_data, write_file, ensure_ascii=False, indent=4)
         

# # Write to JSON output file
# all_data = []
# with open(output_file, 'w', encoding="utf-8") as outfile:
#     for source_file in filepaths:
#         # Read the contents of the source file
#         if os.path.isfile(source_file):
#             with open(source_file, 'r') as file:
#                 data = json.load(file)
#                 all_data.extend(data)

#     json.dump(all_data, outfile,  ensure_ascii=False, indent=4)


print(f"Contents have been written to {pool_2_path}.")
