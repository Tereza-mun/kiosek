import { defineStore } from 'pinia'

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    meeting: {
        id: '1',
        phone: '123456789',
        date: '2024-08-14',
        time: '15:00',
        location: 'Room 101',
        person: 'John Doe'
      },
  }),

})
