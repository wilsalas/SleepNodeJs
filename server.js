const express = require('express'),
    app = express(),
    sleep = require('system-sleep');

app.listen(3000, () => {
    console.log('conected');
})

app.get('/', (req, res) => {
    for (y = 0; y < 10; y++) {
        console.log(y);
        sleep(2000);
    }
    res.send("Finish")
})
