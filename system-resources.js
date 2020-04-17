// Ferramenta de linha de comando para visualização de uso da memória princiapal

const os = require("os");

setInterval(() => {
  const { freemem, totalmem, userInfo, uptime, type, hostname, arch } = os;

  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const porcentagem = parseInt((mem / total) * 100);
  const user_info = userInfo();
  const time = uptime();
  const OS = type();
  const host = hostname();
  const architecture = arch();

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${porcentagem}%`,
    uptime: `${time} seconds`,
    OS: `${OS}`,
    hostname: `${host}`,
    arch: `${architecture}`,
  };

  console.clear();
  console.log(" ===== System Resources ====");
  console.table(stats);
}, 1000);
