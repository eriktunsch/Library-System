<?php

include('../php/server.php');

$provider = new \League\OAuth2\Client\Provider\GenericProvider([
  'clientId'                => 'aCKEmzcFc9aMSNxmbqpNDjk4jUiDzoh5MOsOmjqF',    // The client ID assigned to you by the provider
  'clientSecret'            => 'pSwrptadS2l641s5CW25JPVYQ1jy83TxCht8LKHmjYhqMAgbiz3niRQwaoFAbcYCoWh8OpwKPt50FoCQi8PNiKjXrK9HJMh1tBxTunVhdBYdPw7PiSCgFlXrnnmuORwZ',    // The client password assigned to you by the provider
  'redirectUri'             => 'https://library.humboldt-makerspace.de/login',
  'urlAuthorize'            => 'https://auth.humboldt-makerspace.de/application/o/authorize/',
  'urlAccessToken'          => 'https://auth.humboldt-makerspace.de/application/o/token/',
  'urlResourceOwnerDetails' => 'https://auth.humboldt-makerspace.de/application/o/userinfo/'
]);

// If we don't have an authorization code then get one
if (!isset($_GET['code'])) {

  // Fetch the authorization URL from the provider; this returns the
  // urlAuthorize option and generates and applies any necessary parameters
  // (e.g. state).
  $authorizationUrl = $provider->getAuthorizationUrl();

  // Get the state generated for you and store it to the session.
  $_SESSION['oauth2state'] = $provider->getState();

  // Redirect the user to the authorization URL.
  header('Location: ' . $authorizationUrl);
  exit;

  // Check given state against previously stored one to mitigate CSRF attack
} elseif (empty($_GET['state']) || empty($_SESSION['oauth2state']) || $_GET['state'] !== $_SESSION['oauth2state']) {

  if (isset($_SESSION['oauth2state'])) {
    unset($_SESSION['oauth2state']);
  }

  exit('Invalid state');
} else {

  try {

    // Try to get an access token using the authorization code grant.
    $accessToken = $provider->getAccessToken('authorization_code', [
      'code' => $_GET['code']
    ]);

    // We have an access token, which we may use in authenticated
    // requests against the service provider's API.
    /*echo 'Access Token: ' . $accessToken->getToken() . "<br>";
      echo 'Refresh Token: ' . $accessToken->getRefreshToken() . "<br>";
      echo 'Expired in: ' . $accessToken->getExpires() . "<br>";
      echo 'Already expired? ' . ($accessToken->hasExpired() ? 'expired' : 'not expired') . "<br>";*/

    // Using the access token, we may look up details about the
    // resource owner.
    $resourceOwner = $provider->getResourceOwner($accessToken);

    //var_export($resourceOwner->toArray());

    $_SESSION["username"] = $resourceOwner->toArray()["preferred_username"];

    header("Location: https://library.humboldt-makerspace.de");
    die();
  } catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

    // Failed to get the access token or user details.
    exit($e->getMessage());
  }
}
