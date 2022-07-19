Book Store API Docs

Heroku Database Base URL: https://sensationnel-maison-12931.herokuapp.com

General Error Handling

Errors are returned in an object containing
- error (string): Automatically generated
- name (string): Name of error. Could be used as a header in an error message to user
- message (string): Provides more detail about the error for the user.

Fake Users For Testing:
- userEmail: fake1@fakemail | password: password123
Has orders attached to account.
- userEmail: fake2@fakemail | password: password123
No orders attached to account.

Books Endpoints

GET /api/books

Sends a list of all books in the database in a single array of objects. No request parameters.
Note that some books have broken links to their image files.

Return Parameters
- id (number): Use to identify the book in the database.
- isbn (string)
- title (string)
- author (string)
- year (string): can be converted to number if necessary
- publisher (string)
- imageLinkS (string): thumbnail of book cover
- imageLinkM (string): small image of book cover
- imageLinkL (string): larger image of book cover
- genre (string): randomly generated from 7 values: Horror, Science-Fiction, General Fiction, Mystery, Thriller, Comedy, Romance
- description (string): randomly generated Lorem text paragraph of 5 sentences.
- rating (string): randomly generated one-decimal number between 2.0 and 5.0
- globalRatings (string): represents number of ratings (randomly generated between 0-5000).
- price (string): randomly generated between 8.99 and 29.99 (all prices end with .99).
- inventory (number): randomly generated number between 10-100.

GET /api/books/:id

Returns data for a single book. Use the id value of the book as the route parameter.

Users Endpoints

POST /users/register

Request parameters
- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

Return parameters
- id: identifies user in database
- message: success message
- token

POST /users/login

Request parameters
- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

Return parameters
- user (object)
  - id
  - userEmail
- message: success message
- token

GET /users/me

Use to fetch the users basic id info and orders history.

Request parameters
- requires a token to be sent in the Headers
- "Authentication": `Bearer ${token}`

Return parameters
- id (users id)
- userEmail
- orders (array)
  - orderId (number) - id of order
  - isComplete (boolean) - false indicates items are still in the user's cart
  - price (number) - total cost of the order
  - orderDetails(array) - contains an object for each book that was purchased
    - bookId (number): id of book purcashed
    - quantity (number)
    - title (string)
