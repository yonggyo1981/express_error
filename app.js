const express = require('express');
const app = express();
app.set('PORT', 3000);

app.use((req, res, next) => {
	console.log("공통 라우터");
	next();
});

app.get("/", (req, res, next) => {
	
});

// 없는 페이지 처리 라우터 
app.use((req, res, next) => {
	return res.status(404).send(`${req.url}은 없는 페지이 입니다.`);
});

app.listen(app.get('PORT'), () => {
	console.log(app.get('PORT'), '에서 서버 대기중 ...')
});