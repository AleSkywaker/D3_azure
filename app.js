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

<<<<<<< HEAD
group
  .append('text')
  .attr('x', 180)
  .attr('y', 25)
  .attr('fill', 'black')
  .text('City')
  .style('font-family', 'arial');<q></q>
=======
// console.log(rect);
>>>>>>> lesson2
