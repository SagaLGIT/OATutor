import os
import json
import shutil

output_path = 'src/content-selection/content-pool-2'
content_pool_2_root = os.path.abspath(output_path)

# Read IDs
with open('src/content-selection/selectedIDs.txt', 'r',  encoding="utf-8") as ID_file:
    IDs = ID_file.read().splitlines()

# only unique IDs (not division1a and division1b only division1 eg)
folder_IDs = list(set([ID[:-1] for ID in IDs]))
print(folder_IDs)

filepaths = []
path = 'src/content-sources/oatutor/content-pool'
content_pool_root = os.path.abspath(path)

# generate all ID filepaths
for folder_ID in folder_IDs:
    source_dir = os.path.join(content_pool_root, folder_ID)
    destination_dir = os.path.join(content_pool_2_root, folder_ID)
    filepaths.append((source_dir, destination_dir))

# Write to JSON output file
for source_dir, destination_dir in filepaths:
    if os.path.isdir(source_dir):
        shutil.copytree(source_dir, destination_dir, dirs_exist_ok=True)
        print(f"Copied {source_dir} to {destination_dir}")

print(f"All directories have been copied to {output_path}.")


print(f"Contents have been written to {output_path}.")
