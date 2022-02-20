const express = require('express');
const router = require('../route/employee_route')

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});