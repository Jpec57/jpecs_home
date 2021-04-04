import app from "./app";
const PORT = process.env.PORT || 8002;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));