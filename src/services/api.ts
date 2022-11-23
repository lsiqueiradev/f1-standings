import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.233:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const apiF1 = axios.create({
  baseURL: 'http://ergast.com/api/f1',
})

export const apiInfomation = axios.create({
  baseURL: 'https://f1-standings-informations.herokuapp.com',
})
