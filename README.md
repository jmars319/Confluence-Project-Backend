# Confluence

## Routing

| Method | Path            | Purpose                                   |
| ------ | --------------- | ----------------------------------------- |
| GET    | /               | Default landing page                      |
| GET    | /user           | Get individual user                       |
| GET    | /users          | Get all users by userIds                  |
| GET    | /gendered-users | Get all users by gender                   |
| GET    | /messages       | Get messages by from_userId and to_userId |
| POST   | /signup         | Create new user account                   |
| POST   | /login          | Log in to existing user account           |
| POST   | /message        | Send a message                            |
| PUT    | /addmatch       | Update user with a match                  |
| PUT    | /user           | Update user in database                   |
