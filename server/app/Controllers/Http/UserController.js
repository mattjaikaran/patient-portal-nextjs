'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {

  async register({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password'])
    try {
      const user = await User.create(userData)
      const token = await auth.generate(user)
      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem creating user'
      })
    }
  }
  
  async login({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let accessToken = await auth.generate(user)
        return response.json({ 
          status: 'success',
          user: user, 
          access_token: accessToken 
        })
      }
    } catch (error) {
      return response.status(400).json({ 
        status: 'Error',
        message: 'Your credentials are incorrect' 
      })
    }
  }

  async me({ auth, response }) {
    const user = await User.query().where('id', auth.current.user.id)
    return response.json({
      status: 'success',
      data: user
    })
  }

  async updateProfile({ request, auth, response }) {
    try {
      const user = auth.current.user
      user = {
        username: request.input('username'),
        email: request.input('email'),
        firstName: request.input('firstName'),
        lastName: request.input('lastName'),
        address: {
          address1: request.input('address1'),
          address2: request.input('address2'),
          city: request.input('city'),
          state: request.input('state'),
          zip: request.input('zip')
        },
        healthProvider: request.input('healthProvider'),
        healthBreakdown: {
          smoker: request.input('smoker'),
          medicalHistory: [
            {
              type: request.input('medicalProcedureType'),
              procedure: request.input('medicalProcedure')
            }
          ]
        }
      }

      await user.save()

      return response.json({
        status: 'success',
        message: 'Profile updated',
        data: user
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem updating your profile. Try again'
      })
    }
  }

  async changePassword({ request, auth, response }) {
    const user = auth.current.user
    const verifyPassword = await Hash.verify(
      request.input('password'),
      user.password
    )

    if(!verifyPassword) {
      return response.status(400).json({
        status: 'error',
        message: 'Current password could not be verified'
      })
    }

    user.password = await Hash.make(request.input('newPassword'))
    await user.save()
    return response.json({
      status: 'success',
      message: 'Password updated'
    })
  }

  async showProfile({ auth, params, response }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    try {
      const user = await User.query()
        .where('username', params.username)
        .firstOrFail()
      return response.json({
        status: 'success',
        data: user
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'User not found'
      })
    }
  }

  async deleteProfile({ auth, params, response }) {
    try {
      const user = auth.current.user
      if (User.id === params.id) {
        await User.delete()
        return response.json({
          status: 'success',
          mesage: 'User deleted',
          data: null
        })
      }
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'User not deleted'
      })
    }
  }
}


module.exports = UserController
