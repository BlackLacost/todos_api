import * as express from 'express';
import * as path from 'path';

import { apiRouter } from './routes/api.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', apiRouter);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  const jsonRes =
    req.app.get('env') === 'development'
      ? { error, message: err.message }
      : { message: '500 (Internal Server Error)' };
  res.json(jsonRes);
});

export { app };
