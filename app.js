// Conectando a una fuente externa

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('edificios.json').then(datos => {
  //Añadimos ldatos a los rectangulos
  const rects = svg.selectAll('rect').data(datos);

  rects
    .attr('width', 20)
    .attr('height', d => d.altura)
    .attr('fill', 'crimson')
    .attr('x', (d, i) => i * 30);

  rects
    .enter()
    .append('rect')
    .attr('width', 20)
    .attr('height', d => d.altura)
    .attr('fill', 'crimson')
    .attr('x', (d, i) => i * 30);

  console.log(datos);
});
