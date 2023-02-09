
The Pinterest social connection allows users to log in to your application using their Pinterest profile.

By default, Auth0 automatically syncs user profile data with each user login, thereby ensuring that changes made in the connection source are automatically updated in Auth0. Optionally, you can  [disable user profile data synchronization](https://auth0.com/docs/users/configure-connection-sync-with-auth0)  to allow for updating profile attributes from your application.
  

## Prerequisites

  

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).

2. A Pinterest account.  Register [here](https://www.pinterest.com/business/hub/).

  

## Set up Pinterest

  
### 1. Register your app and get your app ID and app secret key

1.  Log into [www.pinterest.com](https://www.pinterest.com/) with the account that you’ll use to manage your apps
    
2.  Go to [My Apps](https://developers.pinterest.com/apps/)
    
3.  Select Connect app and complete our request form with your app information
    
4.  Submit your request to get Trial access
    
5.  As soon as we complete the review, you will be notified by email
    
6.  Once you have received the email approval, go to My Apps to see your app ID and secret key
    

### 2. Configure the redirect URI required by this code

1.  Go to [My Apps](https://developers.pinterest.com/apps/)  and select your app.
    
2.  Go to “Configure”, and in "Redirect URIs," enter the desired URI. This value is the URI of is `https://{your-Auth0-domain}/login/callback`.  If you are using a [Custom Domain](https://auth0.com/docs/customize/custom-domains) then provide this value instead of your Auth0 domain.


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