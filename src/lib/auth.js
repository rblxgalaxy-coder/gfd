// Authentication bypass - No auth required

export default {
  state: {
    authenticated: true, // Always authenticated
    user: {             // Mock admin user
      id: 'admin-bypass',
      role: 'admin',
      username: 'admin-bypass',
      isAdmin: true
    },
  },

  get() {
    return this.state;
  },

  checkAuth() {
    // Always resolve with success
    return Promise.resolve({ data: this.state.user });
  },

  checkAccess() {
    // Always allow access
    return Promise.resolve(true);
  },

  init() {
    // No initialization needed
    return Promise.resolve();
  }
};
