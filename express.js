import express from "express"
import { execSync } from "child_process";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    buildAndUploadToVercel();
})

app.listen(port, () => {
    console.log(`Listening for build request`)
})

function buildAndUploadToVercel() {
    try {
        execSync('pnpm build',
            { stdio: 'inherit' }
        )
    } catch (err) {
        res.sendStatus(500);
    }

    res.sendStatus(200);
}

