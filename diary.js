// コンポーネント読み込み
import DiaryForm from './DiaryForm.js';
import DiaryList from './DiaryList.js';
// import { defineConfig } from 'vite';
// export default defineConfig({
//   define: {
//     __VUE_OPTIONS_API__: true,
//     __VUE_PROD_DEVTOOLS__: false,
//     __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
//   }
// });
// アプリケーションインスタンス
const app = Vue.createApp({
  	components: {
		DiaryForm,
    	DiaryList,
  	},
  	data() {
		return {
			diaries: [],
		}
	},
	created() {
		this.readDiary()
	},methods: {
		readDiary() { // 読み込む
			const json_data = localStorage.getItem('diary')
			this.diaries = JSON.parse(json_data) || []
		},
		saveDiary() { // 書き込む
			localStorage.setItem('diary', JSON.stringify(this.diaries))
		},
		addDiary(body) { // 投稿する
			const date = new Date()
			this.diaries.push({
				body: body,
				date: date.toLocaleString(),
			})
			this.saveDiary()
		},
		deleteDiary(key) { // 削除する
			this.diaries.splice(key, 1)
			this.saveDiary()
		},
	}
})
const vm = app.mount('#app')