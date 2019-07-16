// Conectando a una fuente externa

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('planetas.json').then(datos => {
  //Añadimos lo anterior a un grupo
  const svg = d3.select('svg');
  const grupo = svg.append('g').attr('transform', 'translate(25,0)');
  const circulos = grupo.selectAll('circle').data(datos);
  const grupo2 = svg.append('g');
  const textGrupo = grupo2.selectAll('text').data(datos);

  //Añadimos circulos en elementos existentes en DOM
  circulos
    .attr('cy', 100)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);

  // Añadimos elementos on the fly
  circulos
    .enter()
    .append('circle')
    .attr('r', d => d.radius)
    .attr('cx', d => d.distance)
    .attr('cy', 100)
    .attr('fill', d => d.fill);

  textGrupo
    .enter()
    .append('text')
    .text(d => d.name)
    .attr('class', 'text')
    .attr('dx', d => d.distance + 15)
    .attr('y', 100)
    .attr('text-anchor', 'start')
    .attr('fill', 'white');

  // textGrupo
  //   .enter()
  //   .append('text')
  //   .text(d => d.name)
  //   .attr('class', 'text')
  //   .attr('dy', d => d.distance)
  //   .attr('y', 25)
  //   .attr('x', -70)
  //   .attr('text-anchor', 'start')
  //   .attr('transform', 'rotate(-90)')
  //   .attr('fill', 'white');
});
