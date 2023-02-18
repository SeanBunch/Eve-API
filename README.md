# Eve Online video game API 

## ToDos:

1. Make Express server. <---------finished
2. Work with data until I can run search queries to find typeid number in the data. <-------currently working on
3. Develop API 
4. Build React frontend 


## Currently working on:

I am working with different ways to querry data from a csv file. I used csvtojson library and then wrote a function to create an array of objects from the csv file. keys="item name" and value=typeid. (I hope this data structure makes sense later <0_0>). 

update 2/13/2023: I think I learned that by useing this method I can only seed my PostgreSQL database through Knex with an array.length of aprox 20,000. So I ran the seed several times each time with a different slice of the array. The array is created from [dataArr.js](/src/dataArr.js). My complete array.length is aprox 44,000+. Running the seed 3 times with different slices can cause human error in the data entry. If the slices are not done correctly it could cause data to be missing for sure and maybe overlap/duplicates. So I am looking for a better way. 

Currently I have successfully seeded the PostgreSQL database with most of the data but I found that I am missing 2 or 3 items. This was caused by my array slices being off by 1 each time I ran the seed. .slice(0, 3) <---does not include 3 so when I ran the second seed I would have incorrectly used .slice(3, 5). This skips array[3] I can re-run the seeds with careful attention to the slice, however I am looking for a better way.

I wonder if the "fs" library could write all of the data to a new file from the csv. Then the data would be in the applicaiton and I could run search algorithms on the local file instead of making API calls to the database. 


## Mmm...
What might be the performance impact of these 2 different ways be? 
How would updating data be different/possible?
I think having the data in a database is better than a local file but these questions are interesting to find out. 