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

3. Add to the Tabs component a display of the currently selected item. Display item name at first, later dispaly item icon.

4. Learn how ot implement user auth.


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

# update 3/28/2023

1. I attempted to implement the sortable columns. I am close in at least one way to complete the task. I have written the sorting logic but I need a way to get the array of data into the useState() for what I have. This would allow me to conintue down the path I am on right now. Another way is to look at using a useCallback hook to sort the data. Tomarrow I will try to complete the path I am on, otherwise I will work on implementing a useCallback hook to call the sorting function when the user clicks the top of the column. 

2. I used < table > elements instead of ul li but now I need to change the bootstrap to make a scrollable window for the table. 

# update 3/29/2023

1. I have developed a few different ways to sort the columns but have not yet figured this problem out. This is the first table sort I have ever implemented I am close. 

2. Also need to configure bootstrap to enable scrollable < table > elements. 

# update 3/30/2023

1. I was able to solve the sorting feature! I was able to figure it out and I implemented the algorithm and necessary syntax to implement a sortable HTML < table >. The algorithm first written in the SellWindow.js component is dynamic in that I only needed to write the algo once and the app will use the same block of code for all the numbered columns. I will try to achieve the same feature with useMemo() so that my application will have better performance. 

2. To create code that is DRY I will think about where I can move the sorting algorithm and pass it as a prop into the components. MarketWindow.js component is the first choice. 

3. I was able to get the tables to be scrollable with sticky headers. 

4. I will begin to work on the logic for the other columns. "Expires in" is the total length of time the item has been allocated to be on the market. To find remaining time left, aka the “Expires in”, I need to take the item time stamp and calculate remaining time left on the item. This will be done by taking the difference between the time stamp of the item being first placed on the market and today’s current time to find total time elapsed so far. Then subtract current elapsed time from the total allocated time for the item to be on the market. This will produced the correct “Expires in” value need for the “expires in” column. 

5. Need to connect the Location drop down to the api call so that user can find prices of items in differnet locaitons. 

# update 3/31/2023

1. I connected the dropped down region / location selector to the api call so now when the user makes a search for an item price it will search in the region that is selected via the drop down selector. Also if the user changes the drop down a new api call will be made and update the seller and buyer window with item prices from the new region selected by the user. 

TODO's: "Expires in" needs to show time remaining, move algorithm from 3/30/2023 num 2 to a parent component so the code is not repeated.

# update 4/3/2023

Found above average job postings for my tech stack in my local area and spent extra time working on job applications and networking. 

# update 4/4/2023

1. Worked on date diff logic for the "Expires in" column. 

# update 4/5/2023

1. Completed the logic and math for the "Expires in" column. YEAH math!!

2. not sure if jumps columns are going to work, I think I will need to remove this column.  

3. I will begin to look at the location column and decide how this should work. I think I will need to find a way to access the location id from the item object and convert the id to a readable name for the user.

# update 4/25/2023

1. Started looking at middleware for data validation. Need to be a string. Needs to be a string of a limited amount. Should exclude symbols like >, <, =, "()", /, {}, [], and !@#$%^&*. If users enters these caracters the app needs to inform the users the data input rules. Pop-up maybe? Maybe there is a smoother way to inform the user. Perhaps a note pops up when the cursor hoovers over the search input field? 

2. Not all search results are returning market data when clicked on by the user. Maybe the item ID needs to be updated in the database or the item is not on the market. Jita market is robust so the likleyhood the item is not on the market is extreamly low. I will look into the item ID's and see if things need to be updated and look for more cluse to why this is happening. 

3. Also looked into the tabs row. Would like to display item image and search list being displayed in a dropdown scrollable menu in the search list similar to the ingame UI works. 

# update 5/18/2023

Worked on optimizing the search input so that the user cannot search for special characters and limit the length of the string that can be entered into the field. I am working on providing error handling and pop up for the user to instruct the user on the limits of the search. For example, if the user attempts to search for special character the application should make the user aware that special characters are not a valid input value.  

Got the alert to work with an if() in the clickHandler() for the search input. Now when the user attempts to search with an invalid string the application will notify the user with an alert. 

# 5/19/2023

Working on the location column to properly display the station name where the item is being sold at. This can be achieved by accessing the value of the location_id attribute inside the marketData useState() variable and making an API/ESI call with the location_id in the url as a template literal.

Okay I get marketData from an API call 
API call provides a marketData array that has a list of objects with the market data such as buy price, sell price, time stamps, and a location_id. 
Showing buy price, sell price, timestamps to the user is in the HTML table like this

    <td> Jumps needlogic</td>
    <td> { item.volume_remain } </td>
    <td> { item.price } </td>
    <td> needs logic </td>
    <td> { days }d { hours }h { minutes }m { seconds }s </td>


Where I am looping through the marketData array and each item is an object that references the data in the HTML table. item.price for example is in the <td></td>. 

Okay thats the set up. the problem is that the location provided in the marketData API call gives a location_id number.... 
The user needs the name of the location not the location id number.
The API I am using has a different url endpoint to get the location information, such as name. 
So I make a second API call to get the location data so that I can get the name of the location.
but now I am not sure how to get the location name to show up in the HTML table. What is happening is the HTML table is rendering before the API call is resovled with the location data that has the location name.

I fixed a bug where the search submit button would cause the application to crash if the input field was blank when the submitt button was clicked. In the app.js file for the server the json response was a string but now it is the data. 


        


