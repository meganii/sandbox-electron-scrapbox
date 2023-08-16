const fs = require('fs');
const code = fs.readFileSync('./dist/index.js', 'utf-8');

globalThis.window.addEventListener('load', (_event) => {
  console.log('Done load');
  waitForScrapboxObject();
})

function waitForScrapboxObject() {
  if (window.scrapbox === undefined) {
    console.log("Scrapbox object is not enabled");
    setTimeout(waitForScrapboxObject, 1000);
  } else {
    console.log("Scrapbox object is enabled");
    
    setTimeout(()=>{
      const script = document.createElement("script");
      script.type = "module";
      script.nonce = "hogehogenonce";
      script.innerHTML = code;
      document.body.appendChild(script);
    },1000)
  }
}