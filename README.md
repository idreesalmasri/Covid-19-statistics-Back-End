# Covid-19-statistics-Back-End  
## Summary  
- A basic Node js express server with postgresql data base.  
- This server provides a simple backend and database for [Covid-19-statistics-Front-End](https://github.com/idreesalmasri/Covid-19-statistics-Front-End) wihc is a webapp to view Covid-19-statistics for countries.  
- This server allow users to save specific statistics records or delete it from the database.  

### End points
1. /getSavedrecords :get request to this endpoint retrieve all saved records from the database.  
2. /addRecord : post request to this end point create new record in the database.  
3. /deleteRecord/:id : Delete request to this end point delete specific record from the database.  

### Packages : 
* Express : to setup our server 
* Nodemon : to start the server 
* pg , sqlite3 , sequleize : to setup the database 
* cors :  allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### Deploy Link
- [Covid-19-statistics-Back-End](https://covid-19-statistics-back-end.onrender.com)
