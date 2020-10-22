'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* spotify stuff */
var SpotifyWebApi = require('spotify-web-api-node');
const { json } = require('body-parser');

var scopes = ['user-top-read', 'user-read-recently-played'],
  redirectUri = 'http://localhost:8888/callback',
  clientId = 'af4f4a03083c41f0a25aa2c233fb1e42',
  state = 'some-state-of-my-choice'; // ???

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

spotifyApi.setAccessToken('BQD1Dd-u5R4ipEQhog_1IfEmkl9UaC0X3gFOuScloAPymxb7Pz26izsl61Gu3ivfr8ktafwXcnsMFtJAg8OghVLIlFZmICLbsrOnNzVayqLbxquheN1tB96mI1BO6lZAIcm0_YWkbpEdibNPyaqzFBOKND6R7vJ2LiH7RbZJuQC6om_JnmQ');
/* end spotify stuff */

// Gets the user's top tracks.
app.get('/api/songs/tracks', (req, res) => {
  spotifyApi.getMyTopTracks()
  .then(function(data) {
    let tracks = data.body.items;
    res.json(tracks);
  }, function(err) {
    res.json('Something went wrong with tracks!', err);
  });
})

// Gets the user's top artists.
app.get('/api/songs/artists', (req, res) => {
  spotifyApi.getMyTopArtists()
  .then(function(data) {
    let artists = data.body.items;
    res.json(artists);
  }, function(err) {
    res.json('Something went wrong with artists!', err);
  });
})

// Gets the user's recently played tracks.
app.get('/api/songs/recently-played', (req, res) => {
  spotifyApi.getMyRecentlyPlayedTracks({
    limit : 20
  }).then(function(data) {
      let played = data.body.items;
      played.forEach(item => (item.track));
      res.json(played);
    }, function(err) {
      res.json('Something went wrong with recently played!', err);
    });
})

// Get Recommendations Based on Seeds
app.get('/api/songs/recommendations', (req, res) => {
  spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_artists: ['6fcTRFpz0yH79qSKfof7lp', '23fqKkggKUBHNkbKtXEls4'],
    min_popularity: 20
  }).then(function(data) {
      let recommendations = data.body;
      res.json(recommendations);
    }, function(err) {
      res.json("Something went wrong with recommendations!", err);
  });
})

app.listen(3333);
console.log('Listening on localhost:3333');
