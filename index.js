var http = require('http');
var dt1 = require('./login');
var dt2 = require('./cadastro');
var dt3 = require('./inicial');
var dt4 = require('./consultas');
var dt5 = require('./localização');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login <br> E-mail: <br> Senha:  " + dt1.login() + "<br><br>");
  res.write("Cadastro <br> E-mail: <br> Senha: <br> Telefone: <br> CPF: " + dt2.cadastro() + "<br><br>");
  res.write("Pagina Inicial" + dt3.inicial() + "<br><br>");
  res.write("Tela de Consultas: " + dt4.consultas() + "<br><br>");
  res.write("Onde estamos Localizados" + dt5.localização() + "<br><br>");
  res.end();
}).listen(5008);


