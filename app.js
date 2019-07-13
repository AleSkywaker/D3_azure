// Conectando a una fuente externa

//Seleccionamos el elemento svg
const svg = d3.select('svg');

d3.json('planetas.json').then(datos => {
  //Añadimos lo anterior a un grupo
  const svg = d3.select('svg');
  const grupo = svg.append('g').attr('transform', 'translate(25,0)');
  const circulos = grupo.selectAll('circle').data(datos);

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

  console.log(circulos);
});
