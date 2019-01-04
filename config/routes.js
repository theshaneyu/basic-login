module.exports.routes = {

  // HTML Views
  // 如果是用 get 造訪以下這些 url，就render出這些view給他
  '/': { view: 'homepage' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  // Endpoints
  // 如果是post這些url，就呼叫controller的這些函數
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
