### > Artemis 
An Uber like ambulance booking application which looks towards ending the chaos of the current system of using an ambulance service in the city of Mumbai.
### > Motivation
Personal experience of experiencing the stress of a task booking an ambulance is for a relative of mine. In times of high stress and anxiety, the calling and unknown wait time just makes it 10x worse.
### > Technologies Used

 - ReactJS
 - Redux
 - NodeJS with Express
 - MongoDB
 
### > How To Install & Run
Open the cloned directory and run `npm install` in root directory and also in the client directory.

    npm install && cd client && npm install

You will need :
 - A mongoDB set up locally or on Atlas and substitue the URI of it in server.js file instead of the local link in the code.
 - A Firebase account with the mobile auth feature enabled to use it for OTP service. Substitute your firebase details in the client/src/firebase.js file.

### > How To Use
   #### 1. Customer Side ( The one who will book )
   

 - Two options to authorize - LOGIN ( by signing up beforehand ) and ONE TIME USE ( using OTP on phone. Works when its an emergency)
 -  Select a pick up spot.
 - Push to "/booking" page where the user will select a hospital or destination and the type of ambulance.
 - Database sends request to all ambulances. Once an ambulance accepts, it will display the user with the time to arrival, contact details and some useful tips that should be followed.
 - Once the service has been completed, the user is allowed to rate the quality of service.
#### 2. Driver Side

 - Login.
 - When trip is available, a dialog will appear on screen.
 - Once a trip is accepted, Google Maps page will open directly showing directions and time to reach pick up spot.
 
### > What Needs To Be Worked On
A lot to be honest.

 - A mobile version of the application ( mainly  design )
 - A way to live track the ambulance when booked just like how Uber does ( still searching for a way to do this ).
 - More functionality in the driver side like detailed history, editable details and better design choices.
 - Features like forgot password and a start trip function to show the time to hospital.

### > How To Contribute ?
Simply raise an issue or make a PR and if valid, i'll merge it to master.

### > Usage Permissions
You can freely edit and clone the code. For personal or commercial use, mail me on dsouzaian2000@gmail.com.

