module.exports = {
  apps: [
    {
      name: 'BITPATAGONIA - Website',
      script: 'npm',
      args: 'run start',
      cwd: './',
      watch: true,
      ignore_watch: ['.git', '.nuxt', 'logs', 'node_modules'],
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_file: 'logs/combined.log',
    },
  ],
}
