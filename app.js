// const a = document.querySelectorAll('div');
// const b = d3.selectAll('div');
// console.log('A => ', a);
// console.log('B => ', b);

const canvas = d3.select('.canvas');

const svg = canvas
  .append('svg')
  .attr('width', 400)
  .attr('height', 200);

const group = svg.append('g').attr('transform', 'translate(10, 0)');

// append shapes to svg container
group
  .append('rect')
  .attr('width', 30)
  .attr('height', 80)
  .attr('fill', 'teal')
  .attr('x', 10)
  .attr('y', 200 - 80);
group
  .append('circle')
  .attr('r', 15)
  .attr('cy', 30)
  .attr('cx', 330)
  .attr('fill', 'gold');

group
  .append('line')
  .attr('x1', 40)
  .attr('y1', 120)
  .attr('x2', 40)
  .attr('y2', 60)
  .attr('stroke', 'black');

group
  .append('text')
  .attr('x', 180)
  .attr('y', 25)
  .attr('fill', 'black')
  .text('City')
  .style('font-family', 'arial');