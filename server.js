const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const createObjects = require('./app/create_objects.js');

const server = jsonServer.create();
server.use(jsonServer.defaults());

// Verarbeitet den Request Body
server.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}))
server.use(bodyParser.json({
    limit: '50mb'
}));



server.get('/dienstherr', (req, res) => {
    console.group(['-- RUN -> dienstherr ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
    const resp = createObjects.getDienstherr(req);

    res.status(resp.status).json(resp.response);
},
),

server.post('/dienstherr', (req, res) => {
    console.group(['-- RUN -> dienstherr ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
    const resp = createObjects.getDienstherr(req);

    res.status(resp.status).json(resp.response);
},
),

server.post('/keylisten', (req, res) => {
  console.group(['-- RUN -> keylisten ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
  const resp = createObjects.getKeylisten(req);

  res.status(resp.status).json(resp.response);
},
),

server.get('/keylisten', (req, res) => {
	console.group(['-- RUN -> keylisten ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
	const resp = createObjects.getKeylistenList(req);
  
	res.status(resp.status).json(resp.response);
},
),

server.post('/calculate', (req, res) => {
  console.group(['-- RUN -> calculate ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
  const resp = createObjects.calculateResult(req);

  res.status(resp.status).json(resp.response);
},
),

server.get('/calculate', (req, res) => {
  console.group(['-- RUN -> calculate ☆*: .｡. o(≧▽≦)o .｡.:*☆']);
  const resp = createObjects.calculateResult(req);

  res.status(resp.status).json(resp.response);
},
),





server.listen(3000, () => {
    console.log('Run Cegeka Quick Check Test-Server on Port 3000')
})
