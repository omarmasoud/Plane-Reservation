**First some prerequisites for running the local webserver to enable dynamicity in pages (done with PHP linking):**

- You need to have PHP installed and added to your environment variables (XAMPP does not do that by default, so double check)
- You need to be running mysql before running the local web server for testing
- You need to use `start_webserver.bat` to start the webserver
- You MUST use `stop_webserver.bat` to stop the webserver, do NOT close the terminal manually!

If all is well, you should be able to run the server as in the following video:

https://user-images.githubusercontent.com/55457021/174680653-09c86503-6c93-450b-a70a-a09da732c709.mp4

If it doesn't work (there are some compatibility issues with some old phpmyadmin environments, and it is windows-only) then you won't be able to run any of the dynamic features. Fear not though, we will cover some of them.

# Here is the ERD of our database

![MicrosoftTeams-image](https://user-images.githubusercontent.com/55457021/174682186-e2a6a9fa-7e4f-43b5-92d7-cceb4cb8d4ff.png)


# Main Dashboard (Index)

This is the main landing page. In here, you can select your flight details

https://user-images.githubusercontent.com/55457021/174679157-229b357d-39ed-4877-ab64-e2af143f3b8b.mp4

https://user-images.githubusercontent.com/55457021/174679331-0939832b-8531-42b8-a5f2-1225aab75a36.mp4

And you can check suggestions

https://user-images.githubusercontent.com/55457021/174678882-e684e1d2-901c-4f04-bc1c-8556cac98f54.mp4

Very smooth header

https://user-images.githubusercontent.com/55457021/174680073-8414e8f2-4e54-4034-80c1-a5d67f8dfcb4.mp4

# Available Planes + Carrier Reviews

Here you can view all the available planes
And if you want to know more about the offering carrier,  you can click on it, and go there

https://user-images.githubusercontent.com/55457021/174681371-3671eff3-0302-40d6-97cd-2fe4d4463611.mp4

# Reservation Area + Review Reservation + Login

If you go to reservation and reserve, you can afterwards review the reservation, and if you're not logged in as is the case in the below demo, you are taken to the login page



https://user-images.githubusercontent.com/55457021/174682142-73f4579d-a8f6-43c9-91fe-e9625bcc1c67.mp4



# Payment Area

Here is where you place your payment details as a logged in user

https://user-images.githubusercontent.com/55457021/174678722-de90c2bc-13ee-40fe-86db-868a0b966479.mp4

The design is responsive as with all other pages 

# About Us / Contact

Here you can have more info. about the dev team and contact them if needs be

https://user-images.githubusercontent.com/55457021/174679648-82d1224c-99d7-4f4e-99b6-bc8096e11a2b.mp4

# Support Tickets

Here you can add support tickets (they are to be pushed to database)

https://user-images.githubusercontent.com/55457021/174679776-0ee2f91f-f33b-4469-9ccd-415c98a18c65.mp4

