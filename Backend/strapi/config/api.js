module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ['_v', 'created_at'],
  },
  rest: {
    defaultLimit: 200,
    maxLimit: null,
  },
});



