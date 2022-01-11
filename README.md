# Material de estudo NodeJS

## O que é NodeJS?

NodeJS é uma plataforma em tempo de execução que se utiliza do motor V8 do google chrome para interpretar código JavaScript fora de um navegador.

O V8 é um motor de JavaScript e WebAssembly do Chrome. É um projeto de código aberto e alta performance do google escrito em C++ que executa código Javascript.

O Node então usa esse motor para, através de comandos em JavaScript, acessar o sistema de arquivos e os recursos da máquina. Em muitos casos esses comandos em JS são "atalhos" para códigos C++ do motor V8 pois o JS não sabe como ler arquivos no disco. 

## Por que usar Node?

A capacidade do NodeJS de trabalhar no modelo de Entrada/Saída não bloqueante (non-blocking I/O model), que possibilita processamento de múltiplos requests de diferentes usuários ao mesmo tempo, é ideal para desenvolvimento no lado do servidor em servidores web e backends de aplicações para a internet. O que isso significa na prática? Velocidade e melhor desempenho na execução das aplicações.
