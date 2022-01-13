import json
import uuid

with open('./data.json') as f:
    data = json.load(f)
    for region, locations in data['oysters']['regions'].items():
        for location, oysters in locations.items():
            for oyster, oyster_profile in oysters.items():
                # Gives a string with unique id, have to set the id to each key in region
                oyster_id = str(uuid.uuid4())
                oyster_profile["id"] = oyster_id
                print(region, location, oyster)

with open('./new_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
