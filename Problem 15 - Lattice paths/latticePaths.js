function latticePaths(gridSize) {
  const grid = Array.from({ length: gridSize + 1 }, () =>
    Array.from({ length: gridSize + 1 }, () => 0)
  );
  for (let i = 0; i <= gridSize; i++) {
    grid[0][i] = 1;
    grid[i][0] = 1;
  }
  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[gridSize][gridSize];
}

latticePaths(4);
