WhereIsMyCar
============

Experiment with mobile app development: Cordova + javascript (Android project). You can read all about it on my [Blog](http://jvaneyck.wordpress.com/2012/12/02/experimenting-with-mobile-application-development/).

This is an eclipse Android project.
Setup instructions for your IDE can be found here: [Getting started with Cordova](http://docs.phonegap.com/en/2.3.0/guide_getting-started_android_index.md.html#Getting%20Started%20with%20Android).

The application is written in JavaScript, sources can be found under ./assets/www/js.
Tests can be found under ./testing/.

To launch the app, you must first configure a google maps API key in ./assets/www/html/index.html. Look for the line that contains
%replace this with your google maps key% and replace this with a valid API key.
You can request a key [here](https://developers.google.com/maps/documentation/javascript/tutorial#api_key).
