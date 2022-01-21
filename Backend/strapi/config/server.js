module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6748b96b6ece2db53c4d97a53e29b720'),
    },
  },
  cron: {
    enabled: true
  },
});
