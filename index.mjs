import express, { urlencoded } from "express";
import { sendMail } from "./auth.mjs";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Hello');
});

app.post('/sendmail', async (req, res) => {
    const email = req.body.email;
    const code = Math.floor(1000 + Math.random() * 9000);

    console.log(email, code);
    await sendMail(email, code);

    res.end(code);
});

app.listen(PORT);