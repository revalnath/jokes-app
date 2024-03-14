## Set Up Instructions

### Download dependencies by running npm install

### Start up the app using npm start

## For Login

### Username: shubham

### Password: 123456

## Routes And Functionality

### Login Route :-

1. When a invalid username and password are provided and the Login button is clicked, then the respective error message received.
2. When a valid username and password are provided and the Login button is clicked, then the page navigated to the Home route.
3. When an unauthenticated user, tries to access the Home Route then the page navigated to Login route.
4. When an authenticated user, tries to access the Login Route then the page navigated to Home route.
5. When show password is click, then the password will shown and if clicked again then password will masked.

### Home Route :-

1. When an unauthenticated user, tries to access the Home Route then the page navigated to Login route.
2. When an authenticated user, tries to access the Login Route then the page navigated to Home route.
3. A fetch request is made to Joke API to get all the jokes.
4. A refresh Joke button is added to refecth the jokes.
5. Logout button is added for user logout.

### More functionality :-

1. for authentication of user local storage is used where a loggedin value is stored as true when user logged in and value get clear when user logged out.
2. useState is used to stored the values.
3. useEffect is used to fetch the API initially.

## Styling :-

### BootStrap and Css is used for styling.
