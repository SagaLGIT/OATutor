import json

with open('src/content-selection/selectedLearningObjectives.txt', 'r',  encoding="utf-8") as f:
    los = f.read().splitlines()

data = {}
for lo in los:
    data[lo] = {"probMastery": 0.1,"probTransit": 0.1,"probSlip": 0.1,"probGuess": 0.1,}
    data[lo + "_pre"] = {"probMastery": 0.1,"probTransit": 0.1,"probSlip": 0.1,"probGuess": 0.1,}
    data[lo + "_post"] = {"probMastery": 0.1,"probTransit": 0.1,"probSlip": 0.1,"probGuess": 0.1,}
# with open("newBktParams.json", "w") as f:

with open("src/content-selection/newBktParams.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
        