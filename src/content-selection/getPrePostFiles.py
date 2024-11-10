import os
import json
import shutil

# input
input_pool = os.path.abspath('src/content-sources/oatutor/content-pool')

# Train, pre and post output paths
train_output_pool = os.path.abspath('src/content-selection/content-pool-train')
pre_output_pool = os.path.abspath('src/content-selection/content-pool-pre')
post_output_pool = os.path.abspath('src/content-selection/content-pool-post')


def get_filepaths(IDs, output_pool):
    # only unique IDs (not division1a and division1b only division1 eg)
    folder_IDs = list(set([ID[:-1] for ID in IDs]))
    print(folder_IDs)

    # generate all ID filepaths    
    filepaths = []
    for folder_ID in folder_IDs:
        input_dir = os.path.join(input_pool, folder_ID)
        output_dir = os.path.join(output_pool, folder_ID)
        filepaths.append((input_dir, output_dir))

    return filepaths


def copy_filetree(filepaths):
    for input_dir, output_dir in filepaths:
        if os.path.isdir(input_dir):
            shutil.copytree(input_dir, output_dir, dirs_exist_ok=True)
            print(f"Copied {input_dir} to {output_dir}")


def write_train(filepaths):
    copy_filetree(filepaths)
    print(f"Train files have been written to {train_output_pool}.")
    

def write_test(filepaths, test_type):
    # Test type: "PRE-" or "POST-"
    copy_filetree(filepaths)

    _, output_path = filepaths[0]

    # go through all files in output_path and change nameing 
    for root, dirs, files in os.walk(output_path):
        for filename in files:
             #change all filenames to include test_type (eg PRE-<filename>)
            old_filepath = os.path.join(root, filename)
            new_filename = f"{test_type}{filename}"
            new_filepath = os.path.join(root, new_filename)
            os.rename(old_filepath, new_filepath)
            print(f"Renamed {old_filepath} to {new_filepath}")



# train 
with open('src/content-selection/trainIDs.txt', 'r',  encoding="utf-8") as ID_file:
    train_IDs = ID_file.read().splitlines()

write_train(get_filepaths(train_IDs, train_output_pool))


# test
with open('src/content-selection/testIDs.txt', 'r',  encoding="utf-8") as ID_file:
    test_IDs = ID_file.read().splitlines()

# PRE
write_test(get_filepaths(test_IDs, pre_output_pool), "PRE-")

# POST
write_test(get_filepaths(test_IDs, post_output_pool), "POST-")




    





# write as usual for training

# for testing do 2 loops [PRE, POST]
    # gather contents from IDs
    # write to separet directory (eg PRE dir)
    #change all this nameing in this directory to ge PRE-<filename> and subquestions PPR-<filename>a, PPR-<filename>b etc



print(f"Contents have been written to {output_path}.")
