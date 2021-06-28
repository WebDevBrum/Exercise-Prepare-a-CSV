# Exercise-Prepare-a-CSV
You will create an API that processes a CSV file (users.csv) and turns it into a JSON file upon visiting the endpoint /convert. Additionally, any phone number that is missing should be filled in with the string, "missing data".

Use the csvtojson node module as a library to do the conversion.

View src in browserView build in browser

NOTE: a popup of "Renderer Failure: tsconfig.json" may open when starting this project. It is safe to ignore this error. Error is due to the comments in tsconfig.json not being considered valid JSON; however, it is generally considered safe to place comments in JSON config files.