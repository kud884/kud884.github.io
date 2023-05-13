
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


// ウィンドウサイズが変更された場合に背景色を変更する関数
function changeBackgroundColor() {
	// 現在のウィンドウの幅を取得
	var width = window.innerWidth;

	// 幅が600pxより大きい場合は背景色を青に、それ以外の場合は赤にする
	if (width > 600) {
		document.body.style.backgroundColor = "blue";
	} else {
		document.body.style.backgroundColor = "red";
	}
}

// ページの読み込み完了時とウィンドウサイズが変更された場合に背景色を変更するイベントを追加
window.onload = changeBackgroundColor;
window.onresize = changeBackgroundColor;
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
