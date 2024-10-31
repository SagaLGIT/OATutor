
import os
import json

# Select only college algebra content
output_file = 'src/content-selection/collegeAlgebraContent.json'
in_file = 'src/content-sources/oatutor/coursePlans.json'


with open(output_file, 'w', encoding="utf-8") as outfile:

        with open(in_file, 'r') as file:
            #contents = file.read()
            data = json.load(file)

            # Extract the "text" attribute from each JSON object
            
            lessons = []
            for course in data:
                if course.get('courseName') == "OpenStax: College Algebra":
                    lessons.extend(course.get('lessons', []))
            # Write the contents to the output file
            json.dump(lessons, outfile, ensure_ascii=False, indent=4)

print(f"Contents of {outfile} have been written to {output_file}.")


