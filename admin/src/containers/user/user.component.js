export default {
  name: 'user',
  props: {
    caption: {
      type: String,
      default: 'User'
    }
  },
  data: () => {
    return {
      fields: [
        { key: '#' },
        { key: 'Name' },
        { key: 'Email' },
        { key: 'Phone' },
        { key: 'Address' },
        { key: 'Status' },
        { key: 'Action' }
      ]
    }
  },
  methods: {
  }
}
