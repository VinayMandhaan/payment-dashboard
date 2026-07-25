# Payment Dashboard

## Steps to run
* Clone the project
* You can run the project using two terminals, one for server and one for client.
* To run server, cd server, npm install and npx tsx watch src/server.ts
* To run client, cd client, npm install and npm start

## Tech
* Backend: Node.js with Express.js
* Frontend: React.js
* Backend Libraries: Express.js, CORS
* Frontend Libraries: Axios, React-Spinners

## Structure

### Backend
* The server is using a default array for data inside /data/payments.ts.
* All the APIs have a prefix /api, the to test the API kindly use the URL localhost:4000/api/payments

### API
1. Get - /payments - Returns all payments. Optional ?status= filter (approved/pending/rejected). No param or all returns everything and an invalid status returns an error.
2. Get - /status/list - Returns the available payment statuses, used to build the filter.


### Frontend
* The data fetching for the website is used using custom hooks for payments and list of payment status, the data fetching can be easily reused in any other component using Hooks.
* The filtering is being handled server side, the payment hook uses status to fetch the list of payments related to it.
* The website is built using resuable components like Tables, FilterChips, ErrorComponent, Button and Axios Instance.

### Possible Improvements
* Filtering currently is implemented in the payment service, which is the right place for the current scope, but in future if we the filtering grows to dates, currency, search then it would be better to move it in helper class where it will handle all the pagination and filteration logic.
* The backend doesn't support pagination, With a small in-memory dataset it isn't needed. For a real, larger dataset the API would take page, limit and offset and the table will have page controls.


### API Preview
<img width="967" height="860" alt="Screenshot 2026-07-25 at 11 04 04 PM" src="https://github.com/user-attachments/assets/ff49e70f-6908-43be-97d1-0be6ec729ef2" />
<img width="967" height="858" alt="Screenshot 2026-07-25 at 11 03 50 PM" src="https://github.com/user-attachments/assets/3eaf1a64-b257-4f84-afc6-3e1f27e05e41" />
<img width="978" height="860" alt="Screenshot 2026-07-25 at 11 03 35 PM" src="https://github.com/user-attachments/assets/ea08000c-e177-482d-8d60-6bc205c10dae" />

### Web Preview
<img width="1728" height="907" alt="Screenshot 2026-07-25 at 11 05 07 PM" src="https://github.com/user-attachments/assets/af31efc9-cca1-4622-93ad-7cb9add5aa35" />
<img width="1728" height="898" alt="Screenshot 2026-07-25 at 11 04 51 PM" src="https://github.com/user-attachments/assets/92706169-1358-43d9-8429-fa3e88286f51" />
<img width="1726" height="902" alt="Screenshot 2026-07-25 at 11 04 37 PM" src="https://github.com/user-attachments/assets/9b8a1519-92f9-434a-9309-fc5c367ce925" />
