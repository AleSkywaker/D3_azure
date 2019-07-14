// Linear Scale

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('comida.json').then(datos => {
  //Añadimos ldatos a los rectangulos

  const yScale = d3
    .scaleLinear()
    .domain([0, 250])
    .range([0, 200]);
  // Band Scale
  const xScale = d3
    .scaleBand()
    .domain(datos.map(item => item.nombre))
    .range([0, 500]);

  const rects = svg.selectAll('rect').data(datos);

  rects
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.altura))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => xScale(d.nombre));

  rects
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.altura))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => xScale(d.nombre));
});
