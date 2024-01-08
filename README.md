# sandbox-electron-scrapbox

ScrapboxのUserScript開発用のElectron

## 手順

1. `src/index.ts`に、Scrapboxから読み込む用のUserScript（Deno）を貼り付ける

2. 下記コマンドでトランスコンパイルする

```
$ deno run --allow-read --allow-write --allow-env --allow-run  .\script\bundle.ts
```

3. `npm start`でElectronを起動、UserScriptの動作確認

4. Importボタンで指定したScrapboxプロジェクトのページにUserScriptをImportする
