import { atom } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: [{
    loggedIn: false,
    username: '',
    email: '',
    password: '',
  }]
})
