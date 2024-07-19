import VoteButton from './VoteButton.js'
const app = Vue.createApp({
    components: {
      VoteButton
    },
    created() {
      alert('投票を開始します')
    },
    methods: {
      // 票を読み上げる
    sayVote(label, count) {
      alert(label + ":" + count)
    }
  }
})
const vm = app.mount('#app')