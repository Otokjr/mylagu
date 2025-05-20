const laguFavorit= [
    ["Isolation","NightHawk22","610k","25k", "NightHawk22.jpg", "Isolation.mp3"],
    ["Shiawase (VIP)","Dion Timmer","430k","65k", "Shiawase-VIP.jpg", "Shiawase (VIP).mp3"],
    ["Otonoke","Creepy Nuts","2,28M","517k", "DandaDan(01).jpg", "Otonoke.mp3"],
  ];


  const konten = document.getElementById("container");

  for (let i = 0; i < laguFavorit.length; i++) {
  var judul = laguFavorit[i][0];
  var penyanyi = laguFavorit[i][1];
  var view = laguFavorit[i][2];
  var like = laguFavorit[i][3];
  var gambar = laguFavorit[i][4];
  var audio = laguFavorit[i][5];

    let audioTerputar = null;

function togglePlay(i) {
  const audio = document.getElementById(`audio-${i}`);
  const btn = document.getElementById(`btn-${i}`);

  if (audio.paused) {
    // Pause audio lain dulu
    if (audioTerputar && audioTerputar !== audio) {
      audioTerputar.pause();
      audioTerputar.currentTime = 0;
      const prevBtn = document.querySelector(`[id^="btn-"][onclick*="(${Array.from(document.querySelectorAll('audio')).indexOf(audioTerputar)})"]`);
      if (prevBtn) prevBtn.textContent = "▶ Play";
    }

    audio.play();
    btn.textContent = "⏸ Pause";
    audioTerputar = audio;
  } else {
    audio.pause();
    btn.textContent = "▶ Play";
    audioTerputar = null;
  }
}

  var element = `
  <div class="lagu">
            <h2>${judul}</h2>
            <small>
                <i>Oleh ${penyanyi}</i>
            </small>
            <img src="image/${gambar}" alt="" srcset="">
            <audio id="audio-${i}" src="audio/${judul}.mp3"></audio>
    <div class="controls">
    <button onclick="togglePlay(${i})" id="btn-${i}">▶ Play</button>
    </div>
            <div class="bawah">
                <div class="right"><i class="ph ph-play"></i>${view}</div>
                <div class="left"><i class="ph ph-heart"></i>${like}</div>
            </div>
        </div>
        `;

  konten.innerHTML += element;
  }

  //Untuk masalah audio saya dibantu ChatGPT, karena saya belum tau cara memasukkan audionya ke js