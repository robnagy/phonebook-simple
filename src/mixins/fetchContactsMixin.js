import NetClient from '../libs/network'
import api from '../libs/api'

export default {
  data() {
    return {
      contacts: [],
      contactsError: false,
      contactsErrorMessage: '',
      contactsLoading: true,
    }
  },
  created() {
    this.fetchContacts();
  },
  methods: {
    fetchContacts() {
      NetClient.request(api.get.contacts, null, null, this.fetchContactsSuccess, this.fetchContactsFailure)
    },
    fetchContactsSuccess(data) {
      this.contacts = data.contacts || null;
      this.contactsLoading = false;
    },
    fetchContactsFailure(error, url) {
      this.contactsError = true;
      this.contactsErrorMessage = error.message || 'An occurred fetching the contacts, please try refresh the page';
      // eslint-disable-next-line no-console
      console.log('Fetch contacts error, '+url);
    }
  }
}