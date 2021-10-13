const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
    let url = ctx.request.url;
    switch(url) {
        case "/":
            ctx.body = "<h1>Welcome to Index Page</h1>";
            break;
        case "/hakkimda":
            ctx.body = "<h1>Welcome to Hakkimda Page</h1>";
            break;
        case "/iletisim":
            ctx.body = "<h1>Welcome to Iletisim Page</h1>";
    }
  });

  const port = 3000;
  
  app.listen(port, () => {
      console.log(`Koa Server port ${port}'de Başlatıldı.`);
  });