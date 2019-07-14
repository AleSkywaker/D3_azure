// Linear Scale

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('edificios.json').then(datos => {
  //Añadimos ldatos a los rectangulos

  const yScale = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);
  const rects = svg.selectAll('rect').data(datos);

  rects
    .attr('width', 20)
    .attr('height', d => yScale(d.altura))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => i * 30);

  rects
    .enter()
    .append('rect')
    .attr('width', 20)
    .attr('height', d => yScale(d.altura))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => i * 30);

  console.log(datos);
});
