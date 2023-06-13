const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Value');
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    add2(num) {
      this.counter = this.counter + num;
    },
    reduce2(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
  /*setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }*/
  }
});

app.mount('#events');
