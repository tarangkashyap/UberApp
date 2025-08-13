# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, a JWT token and the user object are returned.

## Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (min 3, max 20 chars, required)",
    "lastname": "string (min 3, max 20 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 5 chars, required)"
}
```

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields/Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Please provide all required fields"
      }
    ]
  }
  ```
---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

This endpoint allows a registered user to log in using their email and password. If the credentials are valid, a JWT token and the user object are returned.

## Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 5 chars, required)"
}
```

### Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Invalid Credentials

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Notes

- The `email` and `password` must match a registered user.
- The returned JWT token can be used for authenticated requests.

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description

This endpoint returns the authenticated user's profile information. The request must include a valid JWT token.

## Request

- **Headers:**  
  `Authorization: Bearer <jwt_token_here>`

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description

This endpoint logs out the authenticated user by blacklisting their JWT token. The request must include a valid JWT token.

## Request

- **Headers:**  
  `Authorization: Bearer <jwt_token_here>`

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```
