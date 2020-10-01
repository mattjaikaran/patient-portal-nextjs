import { selector } from 'recoil'
import { userState } from './atom'
import axios from 'axios'

const apiURL = process.env.NEXT_PUBLIC_API_URL

export const getUser = selector({
  key: 'getUser',
  get: async ({ get }) => {
    try {
      const response = await axios.get(`${apiURL}/account/profile`)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
})


export const registerUser = selector({
  key: 'registerUser'
})
