# Eve Online video game API 

A market price look up tool for Eve Online. This works by utilizing Eve Online's APIs to fetch real time market prices of in game items. Although there are several popular Eve Market sites that perform this function, I want to build one with a better UI that more closely matches that of the in-game market UI shown Below.

Tech Stack: React.js frontend, and Express.js backend, PostgreSQL database, Bootstrap, CSS. 

## Intallation 

npm install in the frontend and backend directories. npm run dev for nodemon backend and npm start for frontend.  

## In Game UI Screenshot

Below is a screenshot of what the in game ui looks like:

  ![Eve market](/frontend/screenshots/inGameMarket_pic.PNG)

## ToDos:

1. Add middleware for search input field. Check for data type string, limit string length that can be in the input field, perhaps format the input string to lowerCase() and make sure the search can handle odd characters and symbols, or maybe decide to disable the users ability to enter symbols. Not sure what I need but these are some things I am thinking about.

2. Create searchable search results? like maybe allow the user to search the list of search results? idk maybe this kind of thing is not needed if good middleware implemented that enable safe and effective search results from user. The user may not need to search the search results if search results are accurately finding the user’s request. 

3. Learn how to create sortable columns in React. When the ESI/API responds with data I want that data to be displayed in the seller's / buyer's window in such a way the user can sort the data by price, quantity, or any column the user decides. 

4. Add to the Tabs component a display of the currently selected item. Display item name at first, later dispaly item icon.


## UPDATES:

# update 2/12/2023: 
I am working with different ways to query data from a csv file. I used csvtojson library and then wrote a function to create an array of objects from the csv file. keys="item name" and value=typeid. (I hope this data structure makes sense later <0_0>).

What might be the performance impact of these 2 different ways to be? 
How would updating data be different/possible?
I think having the data in a database is better than a local file, but these questions are interesting to find out.

# update 2/13/2023:
I think I learned that by using this method I can only seed my PostgreSQL database through Knex with an array.length of approx. 20,000. So I ran the seed several times each time with a different slice of the array. The array is created from [dataArr.js](/backend/src/dataArr.js). My complete array.length is approx. 44,000+. Running the seed 3 times with different slices can cause human error in the data entry. If the slices are not done correctly, it could cause data to be missing for sure and maybe overlap/duplicates. So, I am looking for a better way. 

Currently I have successfully seeded the PostgreSQL database with most of the data, but I found that I am missing 2 or 3 items. This was caused by my array slices being off by 1 each time I ran the seed. .slice(0, 3) <---does not include 3 so when I ran the second seed I would have incorrectly used .slice(3, 5). This skips array[3] I can re-run the seeds with careful attention to the slice, however I am looking for a better way.

I wonder if the "fs" library could write all the data to a new file from the csv. Then the data would be in the application, and I could run search algorithms on the local file instead of making API calls to the database.


# update 3/15/2023:
I started getting html elements going and new container components for the page. 

# update 3/18/2023:

1. Working on logic for search input. When user inputs a string to the search input I need to match the string from the user to an item ID. To do this I will try to clean the string data and search the SQL database for a match. If match is found then I want to return the value from the database of the itemID. Once the itemID is selected an API call can be made to the EVE API for the market data on that item.  

2. Added error handling and started working on api.
 No search logic just yet but getting the api plugged in then the search logic. I think search logic will be handled in the SQL query. So first I need the onClick/submit to make an API call to my server with the data from the user input and then the search logic (I think in SQL) once I have the user input data routed and passed to the server.

 ![Eve App](/frontend/screenshots/EveApp_pic.PNG)


 # update 3/20/2023:

 Now app will take user input and make an SQL query on the database and list the results in the item list. I want to create a limited sized window and a scroll bar to review search results. When the user clicks an item name form the item list an API call for that item need to be made and the results displayed on the buyer’s window and seller window.

 # update 3/21/2023:

 1. I updated the ItemList component to allow the user to search the data base for items via an input field. The user is able to click on the text in the Search Results list and the app will fetch the market data for the item that was clicked. Also, I was able to get a scrollable window for the long list of search results. 

 2. Next I need to organize the code so that the market data that is returned via the API call for the item that the user clicks on is displayed in the seller’s window and the buyer’s window. For now, when the user clicks on an item from the Search Results list the data returned from the api call is saved to a useState variable in the ItemList component. 

 # update 3/23/2023:

 Commit made to move useEffects up into parent component. This way the data fetched can be passed down into MarketWindow components. 

 # update 3/24/2023: 

1. I found out the API I was first using is not the best one and is limited. I have discovered a much more robust API that has large and detailed documentation with a dedicated developer team from the game that works on this API. There is even a slack channel for developers who want to build application using the API. ESI is the Eve Swagger Interface that is running on a Kubernates cluster. I will be spending time to get up to speed on the very large number of endpoints and look at implementing authorization for my app. This will enable users to log into the app with their credentials from the game and gain access to their in-game account data. Today I will update my Microsoft word document journal that I have been working from to develop this app. I have some research to do and some notes to take before I can implement these new features. So not much new code will be written today as I want to use the more robust endpoints for my application right away. 

2. Did some experimenting with ESI endpoint. I was able to get some data and display some price data in the seller’s window. I read some documentation and took notes in my journal about authorization. I need to implement a scrollable window for the seller’s window. Perhaps using < table > element is not good for seller’s window. Can I get scrollable < table > element? Much better data from the latest API/ESI. 

# update 3/27/2023:

1. I spent time learning how to create sortable columns. I got the seller's window to display the data from the ESI when the user clicks on the item in the search results and get the component to render in a scrollable window. But now I want to allow the user to sort the data in seller's window by price, quanitity, or by any column in the list of data.