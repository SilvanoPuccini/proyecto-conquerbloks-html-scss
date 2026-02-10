const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.[contenthash].js',
    clean: true,
  },
  plugins: [
    // Main HTML pages
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './pages/quienes-somos.html',
      filename: 'pages/quienes-somos.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/cursos.html',
      filename: 'pages/cursos.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/blog.html',
      filename: 'pages/blog.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/registro.html',
      filename: 'pages/registro.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/login.html',
      filename: 'pages/login.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/contacto.html',
      filename: 'pages/contacto.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/aviso-legal.html',
      filename: 'pages/aviso-legal.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './pages/404.html',
      filename: 'pages/404.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    // Course detail pages
    new HtmlWebpackPlugin({
      template: './cursos/detalle-curso-fullstack.html',
      filename: 'cursos/detalle-curso-fullstack.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './cursos/detalle-curso-blockchain.html',
      filename: 'cursos/detalle-curso-blockchain.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './cursos/detalle-curso-ciberseguridad.html',
      filename: 'cursos/detalle-curso-ciberseguridad.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './cursos/detalle-curso-ia.html',
      filename: 'cursos/detalle-curso-ia.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    // News detail pages
    new HtmlWebpackPlugin({
      template: './noticias/detalle-noticia-tendencias.html',
      filename: 'noticias/detalle-noticia-tendencias.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './noticias/detalle-noticia-entrevista.html',
      filename: 'noticias/detalle-noticia-entrevista.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new HtmlWebpackPlugin({
      template: './noticias/detalle-noticia-reactvsangular.html',
      filename: 'noticias/detalle-noticia-reactvsangular.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    // Copy static assets
    new CopyWebpackPlugin({
      patterns: [
        { from: 'css', to: 'css' },
        { from: 'img', to: 'img' },
        { from: 'asset', to: 'asset' },
      ],
    }),
  ],
};
