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
    meetings: [] as MeetingsList[]
  }),
  actions: {
    async fetchMeetings(data?: any) {
      const submittedEmail = JSON.stringify(data)
      console.log('submitted data passed in store type of:', typeof submittedEmail)

      try {
        const { data }: any = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('data from API:', data)
        const filteredData = data.filter((response: any) => response.email === "Sincere@april.biz")
        console.log('filtered data:', filteredData)
        this.meetings = filteredData

      } catch (err: any) {
        this.meetings = [];
        console.error('Error getting data:', err)
        this.error = err.response.data.error
      }
    },
  }
})

interface MeetingsList {
  id: number,
  phone: string,
  date: string,
  time: string,
  location: string,
  person: string,
  email: string
}
