module.exports = {
	  /**
	   *    * Application configuration section
	   *       * http://pm2.keymetrics.io/docs/usage/application-declaration/
	   *          */
	  apps : [
		      {
			            name      : 'my_react_app',
			            script    : 'npm',
			            args      : 'run start:production',
			            env_production : {
					            NODE_ENV: 'production'
					          }
			          },
		    ],

	  /**
	   *    * Deployment section
	   *       * http://pm2.keymetrics.io/docs/usage/deployment/
	   *          */
	  deploy : {
		      production : {},
		      staging: {
			            user: 'ubuntu',
			            host: '35.173.184.139',
			            ref: 'origin/master',
			            repo: 'git@github.com:nach0noir/resume.git',
			            path: '/var/www/web/client',
			            key: '/var/www/web/client',
			            ssh_options: ['ForwardAgent=yes'],
			            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
			          },
		      dev : {}
		    }
};
