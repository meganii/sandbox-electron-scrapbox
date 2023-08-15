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
      require('./dist/index');
    },1000)
  }
}