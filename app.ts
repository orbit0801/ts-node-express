import * as Express from 'express';
const app = Express();
const PORT: Number = 1234;

app.get('/', (req: Express.Request, res: Express.Response) => {
  const msg: string = 'Hello World x Typescript x Express x now (auto deploy)';
  res.send(msg);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

export default app;
