const app = Vue.createApp({
  data() {
    return {
      firstName: 'Chris',
      lastName: 'Vander Linden',
      email: 'vandch02@luther.edu',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods: {
    getUser() {
      fetch("https://randomuser.me/api/").then(response => {
        return response.json()
      }).then(data => {
        // destructure array into obj
        const { ...result } = data.results[0];

        // view data
        console.log(result);

        this.firstName = result.name.first;
        this.lastName = result.name.last;
        this.email = result.email;
        this.gender = result.gender;
        this.picture = result.picture.large;
      });
    }
  }
})

app.mount('#app');
