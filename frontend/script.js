fetch('https://whatyearisit-backend-xi-dun.vercel.app/date')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#year').textContent += data.year;
    });


