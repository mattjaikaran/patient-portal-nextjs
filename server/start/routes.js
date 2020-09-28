'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello to Patient Portal API' }
})


Route.post('/auth/login', 'UserController.login')
Route.post('/auth/register', 'UserController.register')

Route
  .get('users/:id', 'UserController.showProfile')
  .middleware(['auth:jwt'])

Route.group(() => {
  Route.get('/profile', 'UserController.me')
  Route.put('/update-profile', 'UserControlller.updateProfile')
})
  .prefix('account')
  .middleware(['auth:jwt'])

Route.put('/change-password', 'UserController.changePassword')

Route
  .delete('/delete-account/:id', 'UserController.deleteProfile')
  .middleware(['auth:jwt'])

