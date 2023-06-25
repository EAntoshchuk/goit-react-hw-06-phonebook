const { createSlice } = require('@reduxjs/toolkit');

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.initialState.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.initialState = state.contacts.filter(
        contact => contact.id !== payload
      );
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactSlice.actions;
