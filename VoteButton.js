export default {
  data() {
    return {
      count: 0,
    }
  },
  props: {
    label: String,
  },
  methods: {
    // 投票する
    doVote() {
      this.count++
      // 親の「get-vote」カスタムイベントに引数を渡す
      this.$emit('get-vote', this.label, this.count)
    }
  },
  template: `
    <button @click="doVote">{{ label }} {{ count }}</button>
  `
}