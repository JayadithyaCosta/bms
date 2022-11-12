import { FormikValues } from 'formik'
import axios from 'axios'

const BASE_URL = process.env.API_URL

export const getEvents = async () => {
  const response = await fetch(`${BASE_URL}/api/events`)
  const json = await response.json()

  return json
}

export const getEventsByName = async (eventName: string) => {
  const response = await fetch(`${BASE_URL}/api/events/?eventName=${eventName}`)
  const json = await response.json()

  if (json) return json
  return {}
}

export const postEvent = async (formData: FormikValues) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/events`, formData)
    if (!response) console.log('Response Error', response)
    return response
  } catch (error) {
    return error
  }
}

export const login = async (formData: FormikValues) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth`, formData)
    if (!response) console.log('Reponse Error', response)

    return response
  } catch (error) {}
}

// export const addEvent = async (formData: FormikValues) => {
//   try {
//     const Options = {
//       method: 'POST',
//       header: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         Accept: '*/*'
//       },
//       body: JSON.stringify(formData)
//     }

//     const response = await fetch(`${BASE_URL}/api/events`, Options)
//     const json = await response.json()

//     console.log('HELPER', response)

//     return json
//   } catch (error) {
//     return error
//   }
// }

export const updateEventById = async (eventId: string, formData: FormData) => {
  try {
    const Options = {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    const response = await fetch(
      `${BASE_URL}/api/events/?eventName=${eventId}`,
      Options
    )
    const json = await response.json()

    return json
  } catch (error) {
    return error
  }
}

export const deleteEventById = async (eventId: string) => {
  try {
    const Options = {
      method: 'DELETE'
    }

    const response = await fetch(
      `${BASE_URL}/api/events/?eventId=${eventId}`,
      Options
    )
    const json = await response.json()

    return json
  } catch (error) {
    return error
  }
}

export const signUp = async (formdata: FormData) => {
  try {
    const Options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }

    const response = await fetch(`${BASE_URL}/api/users`, Options)
    const json = await response.json()

    return json
  } catch (error) {
    return error
  }
}
