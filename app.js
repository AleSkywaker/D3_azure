// min.max,extent

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('comida.json').then(datos => {
  //creamos un variable min
  const min = d3.min(datos, d => d.ordenes);
  const max = d3.max(datos, d => d.ordenes);
  console.log(min, max);
  const yScale = d3
    .scaleLinear()
    .domain([0, 250])
    .range([0, 200]);
  // Band Scale
  const xScale = d3
    .scaleBand()
    .domain(datos.map(item => item.nombre))
    .range([0, 500])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const rects = svg.selectAll('rect').data(datos);

  rects
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.ordenes))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => xScale(d.nombre));

  rects
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.ordenes))
    .attr('fill', 'crimson')
    .attr('x', (d, i) => xScale(d.nombre));
});
