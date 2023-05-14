const img = document.querySelector('img');
const audios = [
  new Audio('audio1.MP3'),
  new Audio('audio2.MP3'),
  new Audio('audio3.MP3'),
  new Audio('audio4.MP3'),
  new Audio('audio5.MP3'),
  new Audio('audio6.MP3'),
  new Audio('audio7.MP3'),
  new Audio('audio8.MP3'),
  new Audio('audio9.MP3'),
  new Audio('audio10.MP3'),
  new Audio('audio11.MP3')
];

img.addEventListener('click', () => {
  // ランダムに音声ファイルを再生する
  const index = Math.floor(Math.random() * audios.length);
  audios[index].play();
  
  // 別の画像に切り替える
  img.src = 'image2.png';
  
  // 0.5秒後に元の画像に戻す
  setTimeout(() => {
    img.src = 'image.png';
  }, 500); // 500ミリ秒 = 0.5秒
});

img.addEventListener('touchstart', () => {
  // ランダムに音声ファイルを再生する
  const index = Math.floor(Math.random() * audios.length);
  audios[index].play();
  
  // 別の画像に切り替える
  img.src = 'image2.png';
  
  // 0.5秒後に元の画像に戻す
  setTimeout(() => {
    img.src = 'image.png';
  }, 500); // 500ミリ秒 = 0.5秒
});
