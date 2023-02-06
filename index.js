import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const app = express();

dotenv.config();

app.use('/', routes);

// Habilitar template engine
app.engine('handlebars', exphbs.engine({ extname: 'handlebars', defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

// static files
console.log(fileURLToPath(import.meta.url));
app.use(express.static(path.join(fileURLToPath(import.meta.url), 'public')));

const port = process.env.BACKEND_PORT || 3000;

app.listen(port, (req, res) => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
