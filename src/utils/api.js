

export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _responseServer(proms) {
    return proms.then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }

  getUserInfo() {
    const respon = fetch(`${this._url}users/me`, {
      headers: this._headers,
    });
    return this._responseServer(respon);
  }

  setUserInfo(data) {
    const respon = fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });

    return this._responseServer(respon);
  }

  getAllCards() {
    const respon = fetch(`${this._url}cards`, {
      headers: this._headers,
    });

    return this._responseServer(respon);
  }

  postNewCard(data) {
    const respon = fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        link: data.link,
        name: data.name,
      }),
    });
    return this._responseServer(respon);
  }

  deleteCard(id) {
    const respon = fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._responseServer(respon);
  }

  putLike(id) {
    const respon = fetch(`${this._url}cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    });

    return this._responseServer(respon);
  }

  deleteLike(id) {
    const respon = fetch(`${this._url}cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._responseServer(respon);
  }

  getAvatarInfo(pic) {
    const respon = fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: pic.avatar,
      }),
    });

    return this._responseServer(respon);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-18/",
  headers: {
    authorization: "5394c212-7c5a-49a7-aa6c-96fe3c097bff",
    "Content-Type": "application/json",
  },
});

export default api;
