Book Store API Docs

Heroku Database Base URL: https://sensationnel-maison-12931.herokuapp.com

General Error Handling

Errors are returned in an object containing
- error (string): Automatically generated
- name (string): Name of error. Could be used as a header in an error message to user
- message (string): Provides more detail about the error for the user.

Books Endpoints

GET /api/books

Sends a list of all books in the database in a single array of objects. Certain values for each book are randomly generated.

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

Requires a token
- working on this still, should return user's id and email, and their order history.
