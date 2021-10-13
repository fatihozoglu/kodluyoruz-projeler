const http = require("http");

const server = http.createServer( (req,res) => {
    let url = req.url;
    switch(url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Index sayfasina Hosgeldiniz!</h2>");
            break;
        case "/hakkimda":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Hakkimda sayfasina Hosgeldiniz!</h2>");
            break;
        case "/iletisim":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h2>Iletisim sayfasina Hosgeldiniz!</h2>");
    }
    res.end();
})

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port}'de başlatıldı.`);
})