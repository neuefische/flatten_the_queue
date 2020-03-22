#imports
import populartimes
import pandas as pd
import json
import sys, getopt

longitude = 0.0
latitude = 0.0
radius = 1000

def main(argv):
    #try:
    #   opts, args = getopt.getopt(argv,"hl:b:r:",["longitute=","latitude=","radius="])
    #except getopt.GetoptError:
    #   print ('run.py -i <longitude> -o <outputfile>')
    #   sys.exit(2)
    #for opt, arg in opts:
    #   if opt == '-h':
    #      print ('run.py -l <longitude> -b <latitude> -r <radius>')
    #      sys.exit()
    #   elif opt in ("-l", "--longitude"):
    #      longitude = float(arg)
    #   elif opt in ("-b", "--latitude"):
    #      latitude = float(arg)
    #   elif opt in ("-r", "--radius"):
    #      radius = float(arg)
    #print ('longitude file is ', longitude)
    #print ('latitude file is ', latitude)
    #print ('radius file is ', radius)
    latitude = float(argv[0])
    longitude = float(argv[1])
    radius = float(argv[2])

    #try:
    # Larissas api_key, feel free to change
    json2_file = open("api_key.json")
    json2_str = json2_file.read()
    json2_data = json.loads(json2_str)
    api_key = json2_data[0]["api_key"]
    # print(api_key)
    # types of locations that should be considered.
    # others are 'supermarket', 'food', check here:
    types = ["grocery_or_supermarket"]
    # default values for boundrys ( +/- 0.01)
    bound_lower = (latitude-0.01, longitude-0.01)
    bound_upper = (latitude+0.01, longitude+0.01)
    n_threads = 20
    # default
    all_places = False
    results = populartimes.get(api_key, types, bound_lower, bound_upper, n_threads,  radius, all_places)
    # create DataFrame to split Address in street and city
    df = pd.DataFrame(results)
    df.to_csv(r'df1.csv', index=False)
    # if ['current_popularity'] not in df.columns():
    if 'current_popularity' not in df.index:
        df['current_popularity'] = 1000
    df = df.fillna(1000)
    df['street'] = df['address'].str.split(', ', n=1, expand=True)[0]
    df['city'] = df['address'].str.split(', ', n=1, expand=True)[1]
    df['time_spent'] = df.time_spent.map(lambda x: x[0])
    # extract important info
    columns = ['name', 'id', 'street', 'city', 'current_popularity','time_spent']
    df = df[columns]
    # convert to json
    res_json =df.to_json(orient='records')
    # check for consistency
    df.to_csv(r'df2.csv', index=False)
    print(str(res_json))
    sys.stdout.flush()

    #except:
    #print(r'[]')
    #sys.stdout.flush()
    #sys.exit(2)

if __name__ == "__main__":
    main(sys.argv[1:])
