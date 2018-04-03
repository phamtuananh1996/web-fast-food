import Helper from '@/Helper'
export default {
  name: 'app-login',
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    let data = {
      email: 'phamtuananh760@gmail.com',
      password: '123456'
    }
    Helper.api('/login', 'POST', data).then(res => {
      if (res.status === 200) {
        return console.log(res)
      }
      return alert('get detail question fail')
    })
  },
  methods: {}
}
