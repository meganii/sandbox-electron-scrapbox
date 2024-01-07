
globalThis.window.addEventListener('load', (_event) => {
    console.log('Done load');
    waitForScrapboxObject();
})

async function waitForScrapboxObject() {
    if (window.scrapbox === undefined || !document.querySelector("#editor")) {
        console.log("Scrapbox object is not enabled");
        setTimeout(waitForScrapboxObject, 1000);
    } else {
        console.log("Scrapbox object is enabled");
        await import("./mod.ts")
        console.log("mounted!!!!!!!!!!!!!!!!")
    }
}
