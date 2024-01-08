import fs from 'node:fs';
import path from "node:path";
import { importPages } from "https://raw.githubusercontent.com/takker99/scrapbox-userscript-std/0.24.3/rest/page-data.ts"

// UserScriptインポート先プロジェクト
const importingProjectName = 'meganii-userscripts';
// UserScriptインポート先ページ名
const importingPageName = 'Import';
// インポートするバンドル済みUserScript
const filename = path.resolve('./dist/index.js');
let code = '';
try {
    code = fs.readFileSync(filename, {encoding: 'utf8'});
} catch (e) {
    console.error(e);
}

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

        const button = document.createElement("button");
        button.innerHTML = "Import";
        button.type = "submit";
        button.name = "submitBtn";
        document.body.appendChild(button);

        button.addEventListener('click',async (_event) => {
            console.log("Import button was clicked");
            await importPage();
        })

        await import("../dist/index.js");
        console.log("Loaded userscript");
    }
}

async function importPage() {
    const header = [importingPageName, "code:script.js"]
    const lines = [...header, ...code.split('\n').map(c => "\t" + c)]
    const importingPages = [
        {
            "title": importingPageName,
            "lines": lines
        }
    ]

    if (importingPages.length === 0) {
        console.log("No page to be imported found.");
    } else {
        console.log(
            `Importing ${importingPages.length} pages to "/${importingProjectName}"...`,
        );
        const result = await importPages(importingProjectName, {
            pages: importingPages,
        }, { });
        if (!result.ok) {
            const error = new Error();
            error.name = `${result.value.name} when importing pages`;
            error.message = result.value.message;
            throw error;
        }
        console.log(result.value);
    }
}