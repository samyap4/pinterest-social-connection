
The Snapchat social connection allows users to log in to your application using their Snapchat profile.

By default, Auth0 automatically syncs user profile data with each user login, thereby ensuring that changes made in the connection source are automatically updated in Auth0. Optionally, you can  [disable user profile data synchronization](https://auth0.com/docs/users/configure-connection-sync-with-auth0)  to allow for updating profile attributes from your application.
  

## Prerequisites

  

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).

2. A Reddit account.  Register [here](https://www.reddit.com/register/).

  

## Set up Reddit

  


### Step 1: Create a Reddit Application

In order to use the Reddit API, you’ll need to create an application from the developer portal. You can create one by going to [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps), then clicking the "Are you a developer? Create an app ..." button.

### Step 2: Configure the Application

Here you will name your app and make sure to select `web app` for the type.  You will need to provide a `redirect uri` as well.  This value is the URL of is `https://{your-Auth0-domain}/login/callback`.  If you are using a [Custom Domain](https://auth0.com/docs/customize/custom-domains) then provide this value instead of your Auth0 domain.



That’s all for now. Happy building!

  

## Add the Connection

  

1. Select **Add Integration** (at the top of this page).

1. Read the necessary access requirements, and select **Continue**.

1. Configure the integration using the following fields:

* Enter in your Client Id and Client Secret into the corresponding fields.

1. Select the **Permissions** needed for your applications.

1. Choose and configure whether to sync user profile attributes at each login.

1. Select **Create**.

1. In the **Applications** view, choose the Applications that should use this Connection to log in.

  

## Test connection

  

You're ready to [test this Connection](https://auth0.com/docs/authenticate/identity-providers/test-connections).

  

## Troubleshooting