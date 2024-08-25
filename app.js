const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = 3001; // puerto en el que corre la app

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Revisar que las vistas se buscan en la carpeta correcta

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'secreto', 
    resave: false,
    saveUninitialized: true,
}));

// Simulación de base de datos
const users = {};

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta de registro
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.send('Usuario ya registrado.');
    }
    users[username] = { password };
    res.redirect('/login');
});

// Ruta de inicio de sesión
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.send('Usuario o contraseña incorrectos.');
    }
});

// Ruta de dashboard (protegida)
app.get('/dashboard', (req, res) => {
    if (req.session.username) {
        res.render('dashboard', { username: req.session.username });
    } else {
        res.redirect('/login');
    }
});

// Cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
