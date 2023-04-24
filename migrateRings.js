function migrateRings(N, A, B, C) {
  if (N <= 0) {
    throw new Error('N must be a positive integer');
  } else if (N === 1) {
    return [`1: ${A} to ${B}`];
  } else {
    const steps = migrateRings(N-1, A, C, B);
    steps.push(`${N}: ${A} to ${B}`);
    const moreSteps = migrateRings(N-1, C, B, A);
    return steps.concat(moreSteps);
  }
}

const steps = migrateRings(2, 'A', 'B', 'C');
console.log(steps);
