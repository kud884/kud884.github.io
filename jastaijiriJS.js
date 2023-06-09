const img = document.querySelector('img');
const audios = [
  new Audio('audio1.mp3'),
  new Audio('audio2.mp3'),
  new Audio('audio3.mp3'),
  new Audio('audio4.mp3'),
  new Audio('audio5.mp3'),
  new Audio('audio6.mp3'),
  new Audio('audio7.mp3'),
  new Audio('audio8.mp3'),
  new Audio('audio9.mp3'),
  new Audio('audio10.mp3'),
  new Audio('audio11.mp3')
];
// タッチ可能なフラグを初期化する
let touchable = true;

// タッチイベントのリスナーを登録する
img.addEventListener('touchstart', () => {
  // タッチ不可なら何もしない
  if (!touchable) return;
  
  // タッチ不可にする
  touchable = false;

  // ランダムに音声ファイルを再生する
  const index = Math.floor(Math.random() * audios.length);
  audios[index].play();
  
  // 別の画像に切り替える
  img.src = 'image2.png';
  
  // 0.5秒後に元の画像に戻す
  setTimeout(() => {
    img.src = 'image.png';

    // タッチ可能にする
    setTimeout(() => {
      touchable = true;
    }, 1000);
  }, 2000);
});




