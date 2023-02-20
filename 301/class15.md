# Read 15

## Reading

***This is important because knowing jow to keeep data safe and understande where it is coming from allows for a more secure experience***

## What is OAuth

***What is OAuth?***

	OAuth stands for "Open Authorization" and is a standard protocol used for secure authentication and authorization of user data across different applications and services.
OAuth allows users to share their resources and data stored on one service with another service without having to share their login credentials.

***Give an example of what using OAuth would look like.***

	If you want to allow a third-party application access to your Facebook account, instead of sharing your Facebook username and password, you can use OAuth to grant permission to the application to access your Facebook data.

***How does OAuth work? What are the steps that it takes to authenticate the user?***

1. The user initiates an authentication request to the OAuth provider, such as logging in to a third-party app using their Google or Facebook credentials.
2. The OAuth provider verifies the user's identity and generates an access token, which is a string of characters that represents the user's permission to access the requested resource.
3. The OAuth provider sends the access token back to the third-party app, which can then use the access token to request data from the OAuth provider on the user's behalf.
4. When the third-party app makes a request to the OAuth provider with the access token, the OAuth provider checks the token to verify that it's valid and that it corresponds to the requested resource.
5. If the access token is valid, the OAuth provider sends back the requested data to the third-party app, which can then display the data to the user or use it to perform other actions on the user's behalf.

***What is OpenID?***

	OpenID is an open standard that allows users to authenticate themselves on multiple websites without needing a separate username and password for each site. The OpenID standard provides a way for users to use their existing online identities, such as their email address or social media account, to authenticate themselves on third-party websites that support OpenID.

## Authorization and Authentication flows

***What is the difference between authorization and authentication?***

 	Authentication is the process of verifying identity, while authorization is the process of verifying permission to access a specific resource or perform a specific action.

***What is Authorization Code Flow?***

	The Authorization Code Flow, also known as the "Authorization Code Grant" or "Web Server Flow," is a secure and widely-used protocol for authorizing third-party applications to access protected resources on behalf of a user.

***What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?***

	The Authorization Code Flow with Proof Key for Code Exchange (PKCE) is an extension of the OAuth 2.0 protocol that provides an additional layer of security when authorizing access to a resource. It is designed to prevent authorization code interception attacks by using a dynamic secret that is only known by the client and the authorization server.

***What is Implicit Flow with Form Post?***

	The Implicit Flow with Form Post is an OAuth 2.0 flow used to obtain access tokens for a client application without using a server-side component. This flow is typically used in single-page applications (SPAs) or other client-side applications where it is not feasible to use a server-side component to handle the authentication flow.

***What is Client Credentials Flow?***

	This is an OAuth 2.0 flow used by client applications to authenticate with an authorization server and obtain an access token. This flow is typically used in server-to-server communication scenarios, where a client application needs to access a protected resource on behalf of itself, rather than on behalf of a user.

***What is Device Authorization Flow?***

	The Device Authorization Flow is an OAuth 2.0 flow used to authenticate devices with limited input capabilities, such as media players, Internet of Things (IoT) devices, and gaming consoles. This flow allows users to authorize access to protected resources on their device using a secondary device, such as a smartphone or computer, that has a full web browser and input capabilities.

***What is Resource Owner Password Flow?***

	The Resource Owner Password Flow is an OAuth 2.0 flow used to obtain an access token by exchanging a user's username and password for authentication with the authorization server. This flow is typically used by first-party applications, such as mobile or desktop applications, where the client application is owned and controlled by the same entity that owns and controls the protected resource.

    #### Things I want to know more about

    What are some ways to test is working properly? 

## Videos

### Bookmark and Review

#### Auth0 for single page apps
