import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App.tsx';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';

const app = express();

const clientId = process.env.CLIENT_ID;
const SECRET_CODE = 'hbj2lwDCCIx5UzCuGIyEVHtDLTcEmg';

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get('/auth', (req, res) => {
  axios({
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },

    url: 'https://www.reddit.com/api/v1/access_token',
    data: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    auth: {
      username: clientId,
      password: SECRET_CODE,
    },
  })
    .then((response) => {
      res.send(
        indexTemplate(
          ReactDOM.renderToString(App()),
          response.data['access_token']
        )
      );
    })
    .catch(console.log);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
