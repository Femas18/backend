const { postPredictHandler, postPredictHistoriesHandler } = require('../server/handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1000000
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: postPredictHistoriesHandler,
    },
    // Fallback route jika endpoint tidak ditemukan
    {
        path: '/{any*}',
        method: '*',
        handler: (request, h) => {
            return h.response({ status: 'fail', message: 'Not Found' }).code(404);
        }
    }
];

module.exports = routes;
