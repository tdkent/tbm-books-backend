# Book Store API Docs

## General Info

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

### Search

#### GET /api/search/:searchString

Sends an array of objects containing every book with a partial match or better to the search query (currently searches against Title, Author, Publisher). Partial words will return results. Bad spelling / capitilization will return no results.

### Books

**General Return Schema**

Requests to the /api/books/... endpoints will return an array containing one object for each book returned.

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

#### GET /api/books

Sends all books in the database in a single array of objects. Note that some books have broken links to their image files.

#### GET /api/books/:id

Returns an array containing a single book object. The :id parameter in the URL corresponds to the id of the book.

#### GET /api/books/genre/:genre

Returns an array of book objects matching the requested genre parameter. The :genre parameter in the URL must be capitalized (i.e. Horror, Science-Fiction).

#### GET /api/books/top-tens

Returns an array containing two arrays:
- Array #1: The top ten "most rated" books (i.e., the most number of global ratings, regardless of rating).
- Array #2: The top ten "highest rated" books (i.e., the highest rated book, regardless of the number of global ratings).

### Users

#### POST /users/register

**Request parameters**

- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)
 
#### POST /users/login

**Request parameters**

- userEmail (string, required) - not currenly validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)

#### GET /users/me

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
