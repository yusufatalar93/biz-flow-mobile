// src/models/AuthResponse.js

class AuthResponse {
  constructor(access_token, refresh_token) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }
}

export default AuthResponse;

