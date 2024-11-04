import os
import json
import shutil

output_relative_path = 'src/content-sources/oatutor/coursePlans2.json'
output_path = os.path.abspath(output_relative_path)

in_file = 'src/content-selection/collegeAlgebraContent.json'

# Read Learning Objectives
with open('src/content-selection/selectedLearningObjectives.txt', 'r',  encoding="utf-8") as Lo_file:
    los = Lo_file.read().splitlines()

# Get Lessons with selected Learning Objectives
with open(in_file, 'r') as file:
    data = json.load(file)
    lessons = []
    for course in data:
        if any(lo in course.get('learningObjectives', []) for lo in los):
            lessons.append(course)

# Add to lessons attribute        
with open(output_path, 'r+', encoding="utf-8") as outfile:
    existing_data = json.load(outfile)
    existing_data['lessons'].extend(lessons)
    json.dump(existing_data, outfile, ensure_ascii=False, indent=4)

print(f"Contents have been written to {output_path}.")
