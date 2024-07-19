// アプリケーションインスタンス
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello World!', 
      message1: 'Hello World!',    
      // 三角形の底辺と高さ
      base: null,
      height: null,
      // 円の半径
      radius: null,
      // 商品管理
      products: [
        {name: 'りんご', price: 100, stock: 15},
        {name: 'みかん', price: 78, stock: 10},
        {name: 'バナナ', price: 58, stock: 30},
        {name: 'パイナップル', price: 380, stock: 6},
      ],
      // タブ
      activeTab: 'tabs-1',
      tabs: [
        {name: 'tabs-1', text: 'タブ１'},
        {name: 'tabs-2', text: 'タブ２'},
        {name: 'tabs-3', text: 'タブ３'},
      ],
      // じゃんけん
      hands: ['グー', 'チョキ', 'パー'],
      you: null,
      com: null,
      // フォーム
      form: { 
        name: '', birthday: '', gender: '', bloodType: '', 
        hobby: [], message: '', confirm: ''
      },
      // 趣味
      hobbies: {
        sports: 'スポーツ', outdoor: 'アウトドア', reading: '読書', 
        music: '音楽', movie: '映画', game: 'ゲーム', anime: 'アニメ', 
        fashion: 'ファッション', cooking: '料理', diy: 'DIY', other: 'その他'
      },
      // 書籍管理
      newBook: { title: '', author: '' },
      books: [
        {title: '坊っちゃん', author: '夏目漱石'},
        {title: '蟹工船', author: '小林多喜二'},
        {title: '銀河鉄道の夜', author: '宮沢賢治'},
      ],
    }
  },
  computed: {
    // 三角形の面積を算出
    area() {
      return this.base * this.height / 2
    },
    // 円周を算出
    circumference() {
      return (this.radius * 2 * 3.14).toFixed(2)
    },
    // 円の面積を算出
    circleArea() {
      return (this.radius * this.radius * 3.14).toFixed(2)
    },
  },
  methods: {
    // じゃんけんする
    doJanken(key) {
      this.you = key  
      this.com = parseInt(Math.random() * 3) // 0〜2の乱数
    },
    // 書籍を追加
    addBook() {
      this.books.push(this.newBook)
      this.newBook = { title: '', author: '' }
    },
    // 書籍を削除
    deleteBook(key) {
      if (confirm('本当に削除しますか？')) {
        this.books.splice(key, 1)
      }
    },    
  },
})
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `<button @click="count++">{{ count }} クリック</button>`
})
const vm = app.mount('#app')