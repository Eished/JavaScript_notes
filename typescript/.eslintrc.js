module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'], // 定义文件继承的子规范
  plugins: ['prettier'], // 定义了该eslint文件所依赖的插件
  env: {
    // 指定代码的运行环境
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
