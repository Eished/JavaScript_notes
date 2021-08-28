module.exports = {
  // 必须配置, 固定语法
  devServer: {
    proxy: {
      '/user': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/user': '/src/mock/user.json'
        }
      },
      '/list': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/list': '/src/mock/list.json'
        }
      },
      '/proxy': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/proxy': '/src/mock/proxy.json'
        }
      },
      '/author': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/author': '/src/mock/author.json'
        }
      }
    }
  }
}