// ボタン要素を取得する
const colorBtn = document.getElementById('color-btn');

// タッチデバイスでのクリックとマウスでのクリックの両方に対応する関数を定義する
function clickHandler(event) {
	// ボタンのデフォルトの動作を停止する
	event.preventDefault();
	// ボタンの背景色をランダムな色に変更する
	const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	colorBtn.style.backgroundColor = randomColor;
}

// ボタンにタッチイベントリスナーを追加する
colorBtn.addEventListener('touchstart', clickHandler);
// ボタンにマウスクリックイベントリスナーを追加する
colorBtn.addEventListener('click', clickHandler);
