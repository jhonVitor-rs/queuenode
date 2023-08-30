import 'dotenv/config'
import express from 'express';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';

import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();

const bullAdapters = Queue.queues.map(queue => new BullAdapter(queue.bull))

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: bullAdapters,
  serverAdapter,
});

app.use(express.json());
app.use('/admin/queues', serverAdapter.getRouter())
app.post('/users', UserController.store);

app.listen(3333, () => {
  console.log('Server is running on localhost:3333')
});