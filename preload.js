window.addEventListener('load', (event) => {
  console.log('Done load');
  waitForScrapboxObject();
})

function waitForScrapboxObject() {
  if (window.scrapbox === undefined) {
    console.log("まだ有効ではない");
    console.log(window.scrapbox);
    setTimeout(waitForScrapboxObject, 1000);
  } else {
    console.log("scrapbox オブジェクトが有効になったことを確認");
    
    setTimeout(()=>{
      scrapbox.TimeStamp.removeAllFormats();
      scrapbox.TimeStamp.addFormat('YYYY/MM/DD');
      scrapbox.TimeStamp.addFormat('YYYY/MM/DD HH:mm:ss');
      const sb = require('./dist/index');
    },1000)
  }
}