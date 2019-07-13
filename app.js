// Enter Selection

const data = [
  { width: 200, height: 200, fill: 'purple' },
  { width: 100, height: 100, fill: 'yellow' },
  { width: 50, height: 50, fill: 'green' }
];

const svg = d3.select('svg');
// append shapes to svg container
const rect = svg
  .selectAll('rect')
  .data(data)
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill)
  .attr('x', 10)
  .attr('y', 10);

rect
  .enter()
  .append('rect')
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill)
  .attr('x', 10)
  .attr('y', 10);
