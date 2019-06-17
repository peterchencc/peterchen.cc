module.exports = {
  apps : [{
    name: 'peterchen.cc',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'deploy',
      host : '139.162.42.127',
      ref  : 'origin/master',
      repo : 'git@github.com:peterchencc/peterchen.cc.git',
      path : '/home/deploy/peterchen.cc',
      'post-deploy' : 'npm install && npm run build && pm2 startOrReload node_modules/gatsby/dist/bin/gatsby.js --name peterchen.cc -- serve'
    }
  }
};
