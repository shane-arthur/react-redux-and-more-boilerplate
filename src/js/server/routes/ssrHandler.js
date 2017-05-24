import { useRouterHistory, RouterContext, match } from 'react-router';
import { createMemoryHistory, useQueries } from 'history';
import { Provider } from 'react-redux';
import { Promise } from 'bluebird';
import { StyleRoot } from 'radium';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import configureStore from '../../store/configureStore';
import createRoutes from '../../routes/index';

export default function (app) {
  /* istanbul ignore next */
  app.get('*', (req, res, next) => { // eslint-disable-line no-unused-vars
    const history = useRouterHistory(useQueries(createMemoryHistory))();
    const routes = createRoutes(history);
    const location = history.createLocation(req.url);
    const createElement = (Component, props) => (
      <Component // eslint-disable-line react/jsx-filename-extension
        {...props}
        radiumConfig={{ userAgent: req.headers['user-agent'] }}
      />
    );

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        res.status(500).send(error.message);
      } else if (renderProps == null) {
        res.status(404).send('Not Found');
      } else {
        getData().then((result) => { // eslint-disable-line no-use-before-define
          const store = configureStore(result);
          const reduxState = escape(JSON.stringify(result));
          const html = ReactDOMServer.renderToString(
            <StyleRoot>
              <Provider store={store}>
                <RouterContext
                  {...renderProps}
                  createElement={createElement}
                />
              </Provider>
            </StyleRoot> // eslint-disable-line comma-dangle
          );
          res.render('index', { html, reduxState });
        });
      }
      function getData() {
        return new Promise((resolve, reject) => {
          const { query, params } = renderProps; // eslint-disable-line no-unused-vars
          const data = renderProps.components[renderProps.components.length - 1].WrappedComponent;
          try {
            if (data.fetchData) {
              data.fetchData().then((result) => {
                resolve(result);
              });
            } else {
              resolve({});
            }
          } catch (e) {
            reject(e);
            console.log(e); // eslint-disable-line no-console
          }
        });
      }
    });
  });
}
