const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({origin: '*'}),
    express.json(),
    express.urlencoded({
      extended: true,
    }),
);

app.use('/api/author', require('./routes/author.route'));
app.use('/api/illustrator', require('./routes/illustrator.route'));
app.use('/api/label', require('./routes/label.route'));
app.use('/api/novel', require('./routes/novel.route'));
app.use('/api/release', require('./routes/release.route'));

app.use(express.static(path.join(__dirname, './views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

const port = process.env.PORT || '8090';

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

