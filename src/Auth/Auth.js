class Auth {
    constructor() {
        thi.authenticated = false
    }
  login(callback) {
    this.authenticated = true
    callback()
  }

  lagout(callback) {
    this.authenticated = false
    callback()
  }

  isAuthenticated() {
      return this.authenticated
  }
}

export default new Auth()