const saveBtn = document.getElementById('saveBtn');
const mood = document.getElementById('mood');
const journal = document.getElementById('journal');
const entriesDiv = document.getElementById('entries');

// Load saved entries on startup
window.onload = function () {
  showEntries();
};

saveBtn.addEventListener('click', () => {
  const moodValue = mood.value;
  const journalText = journal.value.trim();
  const date = new Date().toLocaleDateString();

  if (journalText === '') {
    alert("Write something for your soul first 🌸");
    return;
  }

  const entry = {
    date: date,
    mood: moodValue,
    text: journalText,
  };

  let entries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  entries.push(entry);
  localStorage.setItem('moodEntries', JSON.stringify(entries));

  journal.value = ''; // Clear the text box
  showEntries();
});

function showEntries() {
  const entries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  entriesDiv.innerHTML = '';

  entries.reverse().forEach((entry) => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      <strong>${entry.date} - ${entry.mood}</strong><br/>
      <p>${entry.text}</p>
    `;
    entriesDiv.appendChild(div);
  });
}
