const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=301%20daires");
xhr.setRequestHeader("X-RapidAPI-Key", "e741d2ad9emsh22be462981f28c8p1d773bjsn33e7d25abeee");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);