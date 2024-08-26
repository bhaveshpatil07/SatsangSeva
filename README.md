# SatsangSeva: BookMyBhajan

## Environment Setup

To get started, create a `.env` file in the root of your project with the following variables:

### Required Environment Variables
---------------------------------

```markdown
# .env file configuration

# Backend API URL
REACT_APP_BACKEND=Your Backend Link

# Google Authentication
REACT_APP_GAUTH_CLIENT_ID=Get it from the Google Cloud Console
REACT_APP_GAUTH_CLIENT_SECRET=Get it from the Google Cloud Console

# Google Maps API Key
REACT_APP_GMAP_KEY=Get it from the Google Cloud Console

# Admin Credentials
REACT_APP_ADMIN=Your Admin Email
REACT_APP_ADMIN_KEY=Your Admin Password

# Secret Key (same as in backend .env)
REACT_APP_SECRET_KEY=Same as in your Backend .env file