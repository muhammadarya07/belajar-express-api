import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js'
import barangRouter from './routes/barang.js'
import gudangRouter from './routes/gudang.js'
import stokRouter from './routes/stok.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/barang', barangRouter);
app.use('/gudang', gudangRouter);
app.use('/stok', stokRouter);

export default app
