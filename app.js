const data = [{ width: 200, height: 200, fill: 'purple' }];

const svg = d3.select('svg');
// append shapes to svg container
const rect = svg
  .select('rect')
  .data(data)
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill)
  .attr('x', 10)
  .attr('y', 200 - 80);
