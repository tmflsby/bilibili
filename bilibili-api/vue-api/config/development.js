const port = Number.parseInt(process.env.PORT) || 2333;

export default {
  port: port,
  hostName: 'http://localhost:' + port,
  serveStatic: true,
  assetHost: '',
  redisUrl: 'redis://localhost:6379/1',
}
