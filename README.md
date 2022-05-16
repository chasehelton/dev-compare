# How to Run devconnect

1. Clone the repo locally

2. Add a `.env` file in `/devconnect` with the following entry:

```
REACT_APP_GH_TOKEN="YOUR_TOKEN_HERE"
REACT_APP_SUPABASE_API_KEY="YOUR_API_KEY_HERE"
REACT_APP_SUPABASE_URL="YOUR_URL_HERE"
```

_Follow the steps [here](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to generate your own token._

3. Install dependencies

```
$ cd devconnect && npm install
```

4. Run the app

```
$ npm start
```
