import http from 'http';
import path from 'path';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import { notFoundHandler } from './middlewares/not-found';
import { errorHandler } from './middlewares/error-handler';

const app = express();

const staticPath = path.join(__dirname, '..', 'public');
app.use('/static', express.static(staticPath));

app.use(express.urlencoded({ limit: '10000mb', extended: false }));
app.use(express.json({ limit: '10000mb' }));

app.use(routes);

// 404 handler
app.use(notFoundHandler);

// general error handler
app.use(errorHandler);

const PORT = 3000;
http.createServer(app).listen(PORT, () => {
  console.log('Express server running on PORT ' + PORT);
});
