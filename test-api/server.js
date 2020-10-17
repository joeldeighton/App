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

spotifyApi.setAccessToken('');
/* end spotify stuff */

app.get('/api/songs/tracks', (req, res) => {

  spotifyApi.getMyTopTracks()
  .then(function(data) {
    let tracks = data.body.items;
    res.json(tracks);
  }, function(err) {
    res.json('Something went wrong!', err);
  });

})

app.get('/api/songs/artists', (req, res) => {

  spotifyApi.getMyTopArtists()
  .then(function(data) {
    let artists = data.body.items;
    res.json(artists);
  }, function(err) {
    res.json('Something went wrong!', err);
  });

})

app.get('/api/songs/recently-played', (req, res) => {

  spotifyApi.getMyRecentlyPlayedTracks({
    limit : 20
  }).then(function(data) {
    let played = data.body.items;
      played.forEach(item => res.json(item.track));
    }, function(err) {
      res.json('Something went wrong!', err);
  });

})

app.listen(3333);
console.log('Listening on localhost:3333');
