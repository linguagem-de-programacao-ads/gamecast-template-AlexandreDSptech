async function findAll() {
    const url = 'https://660f44b4356b87a55c510e3f.mockapi.io/schedule';
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        var response = await fetch(url, {
            method: "GET",
            headers: headers
        });
        if (response.ok) {
            const responseJson = await response.json();

            const cards = document.getElementById('cards_games');

            const listSchedule = responseJson.map(schedule => {
                return cards.innerHTML += schedule.name;
            });

            console.log('SCHEDULE JSON: ', listSchedule);
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

findAll()