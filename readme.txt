Hello!

This website checks user entry against FDA food recall list.

The site is still under maintanence, however the UI part is compeletely done!

Backend:

The application used elastic framework at first which is built on top of Apache Lucene, which is a high performance
text search engine library. It is similar to NoSQL but not exactly like it. Although elasticsearch can perform the storage and
retrieval of data, it's mostly used for indexing and searching data in a JSON file. It can also provide real time statistics if
needed! It is REST-API driven using strictly JSON file data. 

Due to this all the XML has to be first converted to JSON for scraping/indexing. 

However, there were some issues in retrieving data from the JSON object after parsing the JSON file.
I tried using the JSON.parse(file) method to create an object but later realized that the JSON object does cannot be 
traversed like an array using foreach() to get data and kept getting undefined for the JSON object. 

After a long time I decided to work on the front end portion of the project.  After its completion, I used a NoSQL 
database called ForerunnerDB to store the JSON file and fetch/retrieve user input values from the text boxes.
ForerunnerDB gives the counter for the inserted values but does not give the array or dictionary back which I was trying to
work on. 

INSTRUCTIONS TO RUN:

1) To run the website, simply run the index.html 

2) To see the results of elasticsearch, you have to install elasticsearch first and initiate the server!
	Install from: https://www.elastic.co/downloads/elasticsearch 
	After the installation, run \bin\elasticsearch.bat which will initiate it
	Run curl http://localhost:9200/ to see if its working
	Now, run: node elasticindex.js in cmd or terminal

3) To see the results of ForerunnerDB, run: node \js\list.js
	More info on forerunnerDB: https://www.npmjs.com/package/forerunnerdb


 
