const suma = (a, b) => {
  return a + b;
};

suma(1, 2); // 3
suma(1); // se rompe

const resta = ({ a = 0, b = 0 }) => {
  return a + b;
};

resta({ a: 2 }); // 2
