# TBM Books API Docs

## General Info

### Heroku Database

- Database URL is stored locally in .env file.
- Access using process.env.DATABASE_URL

### Generated Users

The database is currently seeded with 200 dummy user accounts. Here are three to use for testing:

1. userEmail: fake1@fakemail | password: password123 | isAdmin: false
2. userEmail: fake2@fakemail | password: password123 | isAdmin: false
3. userEmail: admin@tbm dot com | password: admin123 | isAdmin:true

### Errors

Sent as objects containing:

- error (string): Automatically generated
- name (string): Name of error. Could be used as a header in an error message to user
- message (string): Provides more detail about the error for the user.

## Endpoints

### Search

#### GET /api/search/:searchString

Sends an array of objects containing every book with a partial match or better to the search query (currently searches against Title, Author, Publisher). Partial words will return results. Bad spelling / capitalization will return no results.

### Books

- There are currently 400 book objects in the database.

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
- isFeatured (boolean): Indicates if book is part of featured book curated list.
- isActive (boolean): activation status of book. If false, the book is deactivated and removed from the front end.  

#### GET /api/books

Sends all books in the database in a single array of objects. Note that some books have broken links to their image files.

#### GET /api/books/:id

Returns an array containing a single book object. The :id parameter in the URL corresponds to the id of the book.

#### GET /api/books/count/:genre

Returns the number of books in the database matching the genre parameter. Used for pagination.

#### GET /api/books/genre/:genre/:currentPage

Returns an array of 20 books matching the genre parameter, offset by the currentPage number. Used for pagination.

#### GET /api/books/lists/curated-rankings

Returns an array containing 10 book objects corresponding to the top ten "most rated" books (i.e., the most number of global ratings, regardless of rating).

#### GET /api/books/lists/curated-ratings

Returns an array containing 10 book objects corresponding to the top ten "highest rated" books (i.e., the highest rated book, regardless of the number of global ratings).

#### GET /api/books/lists/featured

Returns an array containing 10 book objects representing our personally chosen top books.

### Authors

#### GET /api/authors/:authorName

Returns an array of book objects matching the authorName parameter.

### Users

#### POST /api/users/register

**Request parameters**

- userEmail (string, required) - not currently validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)
  - isAdmin (boolean)
 
#### POST /api/users/login

**Request parameters**

- userEmail (string, required) - not currently validating email structure on the server side
- password (string, required) - must be at least 8 characters

**Return parameters**

- message (string): success message
- token
- user(object)
  - id (number)
  - userEmail (string)
  - isAdmin (boolean)

#### GET /api/users/me

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
  - orderPrice (number) - total cost of the order
  - orderDetails(array) - contains an object for each book that was purchased
    - bookId (number) - id of book purchased
    - bookPrice (string) - price of each copy of the book
    - bookId (number): id of book purchased
    - quantity (number)
    - title (string)
    - imageLinkS (string)

#### GET /api/users/me/cart

Use to fetch the user’s current open cart

**Request parameters**

Requires a token to be sent in the Headers:

`"Authentication": "Bearer" ${token}`

**Return parameters**

Returns an object containing the main order data, with another array containing each book object.

- orderId (number) - id of order
- orderPrice (number) - total cost of the order
- orderDetails (array) - contains an object for each book that was purchased 
  - bookId (number) - id of book purchased
  - bookPrice (string) - price of each copy of the book
  - quantity (number) - number of copies in the order
  - title (string)
  - imageLinkS (string)

### Cart

#### POST /api/orders/cart

- Creates a new order if the user’s cart is empty.
- Adds to the existing order if the user’s has an open cart already.
- Tracks total order price
- Tracks order details (books added, quantity, price of each book)

**Request Parameters**

- Does not require a token to be sent, however the user must be logged in for the order to be added to the database.
- Requires user’s id, book price, book id, quantity.

```
method: “POST”,
headers: {
        “Content-Type”: “application/json”,
},
body: JSON.stringify({
        userId,
        bookPrice,
        bookId,
        quantity,
})
```

**Return parameters**

Returns an array with a single object containing book and order data.

#### PATCH /api/orders/cart

**Request Parameters**

- Requires the current quantity and the user's updated quantity.

```
method: "PATCH",
headers: {
        “Content-Type”: “application/json”,
},
body: JSON.stringify({
        orderId,
        bookId,
        bookPrice,
        oldQuantity,
        newQuantity,
})
```

**Return Parameters**

Object:
- name (string): States whether patch was un/successful.
- message (string): States whether patch was un/successful.

#### DELETE /api/orders/cart

Deletes an item from the cart.

**Request Parameters**

- Requires the order id, book id, book price, quantity.

```
method: “DELETE”,
headers: {
        “Content-Type”: “application/json”,
},
body: JSON.stringify({
        orderId,
        bookId,
        bookPrice,
        quantity,
})
```

**Return Parameters**

Object:
- name (string): States whether deletion was un/successful.
- message (string): States whether deletion was un/successful.

### Orders

#### POST /api/orders/:orderId

"Complete" the logged in user's order by setting "isComplete" to true in users_orders table. 

**Request Parameters**

Requires token and the orderId to be passed as a route parameter.

```
method: “POST”,
headers: {
        “Content-Type”: “application/json”,
        Authorization: `Bearer ${token}`,
}
```

**Return Parameters**

Object:
- name (string): States whether checkout was un/successful.
- message (string): States whether checkout was un/successful.

### Stripe Checkout

Endpoint to create a temporary Stripe checkout session in test mode. The form accepts dummy data, and does not transmit it anywhere. Refer to [this list](https://stripe.com/docs/testing#cards) when entering credit card numbers.

Note that this endpoint does NOT use /api prefix

### POST /create-checkout-session

**Request Parameters**

Requires the userId and orderPrice.

```
method: "POST",
headers: {
        "Content-Type": "application/json",
},
body: JSON.stringify({
        userId,
        orderPrice,
        }),
})
```

**Return Parameters**

When the checkout session is complete or cancelled (cancellation occurs if the user clicks the back button in the checkout window), a redirect route is created, returned to the front end, and placed into the user's window.location.href.

Success URL: "http://localhost:3000/${userId}/cart?success=true"
Cancel URL: "http://localhost:3000/${userId}/cart?canceled=true"

**Note: above routes will need to be updated to final front end URL.**

The redirect route reloads the user's cart, and closes the order on either success or cancel **(this needs to be fixed)**.

### Admin

Endpoints used by the front end Admin Portal.

**Request Parameters**

With the exception of endpoints returning counts, all admin requests require a token with an isAdmin = true value attached.

#### Admin - Users

#### GET /api/admin/users

Returns a number representing the total number of users in the database. Used for pagination.

#### GET /api/admin/users/:currentPage

Returns an array of 100 user objects, offset by the currentPage param.

#### PATCH /api/admin/users/deactivate

Deactivates the selected user's account, permanently barring them from access from the front end site.

#### PATCH /api/admin/users/promote

Promotes the selected user's account to an admin role, allowing them access to the Admin Portal.

#### Admin - Orders

#### GET /api/admin/orders

Returns a number representing the total number of orders in the database.

#### GET /api/admin/orders/:currentPage

Returns an array of 100 orders objects, offset by the currentPage param.

#### GET /api/admin/orders/closed/:currentPage

Returns an array of 100 orders objects where isComplete = true, offset by the currentPage param.

#### GET /api/admin/orders/open/:currentPage

Returns an array of 100 orders objects where isComplete = false, offset by the currentPage param.

#### Admin - Products

#### GET /api/admin/books

Returns a number representing the total number of books in the database.

#### GET /api/admin/books/:currentPage

Returns an array of 100 book objects, ordered by id, offset by the currentPage param.

#### POST /api/admin/books/add

Adds a new book to the database using the provided Add New Book form in the Admin Portal.

#### PATCH /api/admin/books/:bookId

Edits a book in the database using the provided Edit Book form in the Admin Portal.

#### DELETE /api/admin/books/:bookId

Deactivates a book in the database. The book will no longer appear in front end requests.




