const adviceContent = document.getElementById('adviceContent');
const diceButton = document.getElementById('diceButton');

function UpdateContent(data)
{
    adviceContent.textContent = data.slip.advice;
}   

diceButton.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        UpdateContent(data);
    })
    .catch(err => {
        console.error('Error fetching advice:', err);
    });
});
