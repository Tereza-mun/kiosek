import { defineStore } from 'pinia'
import axios from 'axios'

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    dummyMeeting: {
        id: 1,
        phone: '123456789',
        date: '2024-08-14',
        time: '15:00',
        location: 'Room 101',
        person: 'John Doe'
      },
    error: null as null | string,
    meetings: [] as MeetingsList[],
    submittedEmail: null as null | string,
  }),
  actions: {
    async fetchMeetings(data?: any) {
      if (data?.email === undefined) return
      const submittedEmail = data.email

      try {
        const { data }: any = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.meetings = data.filter((response: any) => response.email === submittedEmail)
        this.submittedEmail = submittedEmail

      } catch (err: any) {
        this.meetings = [];
        console.error('Error getting data:', err)
        this.error = err.response.data.error
      }
    },
  }
})

interface MeetingsList {
  id: number
  email: string
  name: string
  phone: string
  address: {
    street: string,
    city: string,
    zipcode: string
  }
}
