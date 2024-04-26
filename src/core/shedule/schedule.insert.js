async function insert() {
    const url = 'https://660f44b4356b87a55c510e3f.mockapi.io/schedule';

    const name = document.getElementById('name_game').value;
    const date = document.getElementById('date_game').value;
    const description = document.getElementById('description_game').value;
    const gamers = document.getElementById('tags_game').value;
    const urlVideo = document.getElementById('image_game').value;
    const urlImage = document.getElementById('link_game').value;


    const payload = {
        name: name,
        date: new Date(date),
        description: description,
        gamers: gamers.split(','),
        urlVideo: urlVideo,
        urlImage: urlImage
    }
    console.log('LOG 1:',payload)
    console.log('LOG 2:', {...payload})
    console.log('LOG 3:',JSON.stringify(payload))

    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        var response = await fetch(url, {
            method: "POST",
            headers: headers,
            // body: { ...payload }
            body: JSON.stringify(payload)
        });
        if (response.status == 201) {
            window.location.href = 'schedule.html'
        } else {
            alert('algo teu errado')
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}