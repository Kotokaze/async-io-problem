'use strict';

new Promise((resolve) => {
	const newDate = new Date();

	resolve(newDate);
})
	.then((v1) => {
		// v1: 現在時刻
		const monthAndData = {
			month: v1.getMonth(),
			date: v1.getDate()
		}

		return new Promise((resolve) => resolve(monthAndData));
	})
	.then((v2) => {
		// v2: 日付け情報
		const text = `今日は${v2.month + 1}月${v2.date}日です。`;

		return new Promise((resolve) => resolve(text));
	})
	.then((v3) => {
		// v3: 日付けを示す文章
		console.log(v3);
	})
