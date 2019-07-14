// Conectando a una fuente externa

//Seleccionamos el elemento svg
const svg = d3.select('svg');
const grupo = svg.append('g');

d3.json('edificios.json').then(datos => {
  //Añadimos ldatos a los rectangulos
  const rects = grupo.selectAll('rects').data(datos);
  console.log(datos);
});
