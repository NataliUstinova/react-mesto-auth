class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  _checkServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }
  
  getUserInfoServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }
  
  editProfile({name, about}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkServerResponse)
  }
  
  addUserCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkServerResponse)
  }
  
  changeUserAvatar(userAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar,
      })
    })
      .then(this._checkServerResponse)
  }
  
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkServerResponse)
  }
  
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkServerResponse)
  }
  
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkServerResponse)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '46f10111-7535-41c9-bac2-e4a6e0f14e0d',
    'Content-Type': 'application/json'
  }
});