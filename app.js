const data = [{ width: 200, height: 200, fill: 'purple' }];

const svg = d3.select('svg');
// append shapes to svg container
svg
  .append('rect')
  .attr('width', 30)
  .attr('height', 80)
  .attr('fill', 'teal')
  .attr('x', 10)
  .attr('y', 200 - 80);
