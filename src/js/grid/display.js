function updateTitle({dataset, column}) {
  const displayEl = document.querySelector('#grid-display-title');
  displayEl.textContent = `Dataset: ${dataset.title}, column: ${column}`;
}

export function update({dataset, column}) {
  updateTitle({dataset, column});
}
