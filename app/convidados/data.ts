/*
  "Base de dados" temporária: um array na memória do servidor.

  Todos os ficheiros que importam guests recebem o MESMO array (o import não copia).
  O processo do Node.js continua vivo entre pedidos (ao contrário do PHP, que começa
  do zero em cada pedido), por isso os dados mantêm-se... até o servidor reiniciar.
  Numa aplicação real, isto seria uma base de dados.
*/
export type Guest = {
  id: number;
  name: string;
};

export const guests: Guest[] = [
  {id: 1, name: "Querry"},
  {id: 2, name: "Gali"},
  {id: 3, name: "Doni"},
  {id: 4, name: "Inadiga"},
];
