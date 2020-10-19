const app = require('./src/app/index');
const port = 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(process.env.PORT || port);
