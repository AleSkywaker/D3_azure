// Grupos y margenes

//Seleccionamos el elemento con classe canvas
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', 500)
  .attr('height', 320);

//Creamos margenes
const margin = { top: 20, right: 20, bottom: 80, left: 80 };
const graficoAncho = 500 - margin.left - margin.right;
const graficoAlto = 320 - margin.top - margin.bottom;

// Creamos grupo
const graph = svg
  .append('g')
  .attr('width', graficoAncho)
  .attr('height', graficoAlto)
  .attr('transform', `translate(${margin.left},${margin.top})`);

const xAxisGrupo = graph.append('g').attr('transform', `translate(0, ${graficoAlto})`);
const yAxisGrupo = graph.append('g').attr('transform', `translate(${0},${0})`);

d3.json('comida.json').then(datos => {
  //creamos un variable min
  const min = d3.min(datos, d => d.ordenes);
  const max = d3.max(datos, d => d.ordenes);
  const minYmax = d3.extent(datos, d => d.ordenes);

  const yScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([0, graficoAlto]);
  // Band Scale
  const xScale = d3
    .scaleBand()
    .domain(datos.map(item => item.nombre))
    .range([0, graficoAncho])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const rects = graph.selectAll('rect').data(datos);

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

  //Crear y llamar axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  xAxisGrupo.call(xAxis);
  yAxisGrupo.call(yAxis);
});
