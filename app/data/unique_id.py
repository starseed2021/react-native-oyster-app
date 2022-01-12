import json

with open('./data.json') as f:
    data = json.load(f)
    for location in data[0]['oysters']['regions']:

        print(location.keys())
