# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend App using React with Javascript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Javascript
  - React + Vite
  - Tailwind CSS
 
## Landing Page
![landingpage](https://github.com/user-attachments/assets/3a564398-e3f8-4c03-87e3-572b463fe51a)

## Dashboard with Light Mode
![dashbord_lightmode](https://github.com/user-attachments/assets/640f2569-fdf1-4e80-970f-0930dec3028e)

## Dashboard with Dark Mode
![dashbord_darkmode](https://github.com/user-attachments/assets/e53c3228-0463-4938-baf6-5f4c7d058b5d)

## Reply Email 
![replyemail](https://github.com/user-attachments/assets/f30c2280-126f-4df1-a006-bc656f14e7fc)

## Delete Email 
![delete_email](https://github.com/user-attachments/assets/c89a1cbb-c1f7-41b9-8bc7-244f3cffad67)



 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/RohitKumarkushwaha/Reachinbox_Assignment.git  ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:5173 ``` <br/>
   

   ## Features 
   
  - Login Authentication (/google-login)
  - Light and Dark Mode
  - Get All Emails (fetching of data in OneBox using API integration)
  - Custom Text Editor
  - Reply (Send) Email
  - Delete Email
  - Keyboard shortcuts in OneBox:- “D” delete an email and “R” open Reply box


   <h2>Endpoints</h2>
   <h3>List All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>Get Messages in Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Reply Email</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
  
