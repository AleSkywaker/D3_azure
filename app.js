const data = [{ width: 200, height: 200, fill: 'purple' }];

const svg = d3.select('svg');
// append shapes to svg container
const rect = svg
  .select('rect')
  .data(data)
  .attr('width', function(d) {
    console.log(d.width);
  })
  .attr('height', 80)
  .attr('fill', 'teal')
  .attr('x', 10)
  .attr('y', 200 - 80);

// console.log(rect);
