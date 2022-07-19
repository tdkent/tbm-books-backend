# Book Store API Docs

### Heroku Database

[Database URL](https://sensationnel-maison-12931.herokuapp.com)

### Generated Users

1. userEmail: fake1@fakemail | password: password123 (Has orders attached to account)
2. userEmail: fake2@fakemail | password: password123 (No orders)

### Errors

Sent as objects containing:

- error (string): Automatically generated
- name (string): Name of error. Could be used as a header in an error message to user
- message (string): Provides more detail about the error for the user.

## Endpoints

### Books

##### GET /api/books

Sends a list of all books in the database in a single array of objects. Note that some books have broken links to their image files.

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

##### GET /api/books/:id

Returns an array containing a single book object with the same keys as above.

##### GET /api/books/genre/:genre

Returns an array of book objects matching the requested genre parameter. Note that genre names are uppercased (Horror, Science-Fiction, etc.).

### Users

##### POST /users/register

**Request parameters**

- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)
 
##### POST /users/login

**Request parameters**

- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)

##### GET /users/me

Use to fetch the users basic id info and orders history.

**Request parameters**

Requires a token to be sent in the Headers:

`"Authentication": "Bearer" ${token}`

**Return parameters**

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
