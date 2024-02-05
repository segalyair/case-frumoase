import express from "express"
import { execSync } from "child_process";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    try {
        buildAndUploadToVercel();

    } catch (err) {
        res.sendStatus(500);
    }

    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Listening for build request`)
})

function buildAndUploadToVercel() {
    execSync('pnpm deploy:vercel',
        { stdio: 'inherit' }
    )
}
