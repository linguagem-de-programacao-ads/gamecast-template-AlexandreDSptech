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

            const createDivDataGame = (schedule) => {
                const divDataGame = document.createElement('div');
                const svgCalendar = document.createElement('img');
                const spanDate = document.createElement('span');

                svgCalendar.src = '../assets/calendar-solid.svg';
                spanDate.innerHTML = schedule.gameDate;

                divDataGame.className = 'dataGame';
                divDataGame.appendChild(svgCalendar);
                divDataGame.appendChild(spanDate);

                return divDataGame;
            };
            const createImgBackground = (schedule) => {
                const imgBackGround = document.createElement('img');
                imgBackGround.src = schedule.urlImage;
                imgBackGround.className = 'img-background';

                return imgBackGround;
            };
            const createDivDescription = (schedule) => {
                const divDescription = document.createElement('div');
                divDescription.className = 'descricao';

                const pTitle = document.createElement('p')
                const strongTitle = document.createElement('strong')
                strongTitle.innerHTML = `${schedule.name}`
                
                pTitle.appendChild(strongTitle);

                const pDescription = document.createElement('p');
                pDescription.innerHTML = schedule.description;

                const pGamers = document.createElement('p')
                const strongGamers = document.createElement('strong');
                strongGamers.innerHTML = 'Gamers:'

                pGamers.appendChild(strongGamers);

                const divGamers = document.createElement('div');
                divGamers.className = 'gamers';

                const gamers = schedule.gamers;

                gamers.forEach(gamer => {
                    const divGamerItem = document.createElement('div');
                    divGamerItem.className = 'gamerItem';

                    divGamerItem.innerHTML = gamer;

                    divGamers.appendChild(divGamerItem);
                });

                divDescription.appendChild(pTitle);
                divDescription.appendChild(pDescription);
                divDescription.appendChild(pGamers);
                divDescription.appendChild(divGamers);
                    
                return divDescription;
            }
            const createDivWatch = (schedule) => {
                const divWatch = document.createElement('div');
                divWatch.className = 'assistir';

                const aWatch = document.createElement('a');
                const svgWatch = document.createElement('img');
                svgWatch.src = '../assets/youtube.svg';

                aWatch.className = 'assistirItem';
                aWatch.appendChild(svgWatch);
                aWatch.innerHTML += 'Assistir';
                aWatch.href = schedule.urlVideo;
                aWatch.target = '_blank';
                
                divWatch.appendChild(aWatch);

                return divWatch;
            };

            responseJson.map(schedule => {
                const divDataGame = createDivDataGame(schedule);
                const imgBackGround = createImgBackground(schedule);
                const divDescription = createDivDescription(schedule);
                const divWatch = createDivWatch(schedule);

                const divCardItem = document.createElement('div');
                divCardItem.className = 'cardItem';

                divCardItem.appendChild(divDataGame);
                divCardItem.appendChild(imgBackGround);
                divCardItem.appendChild(divDescription);
                divCardItem.appendChild(divWatch);

                cards.appendChild(divCardItem);
            });

            // const [ json1, json2 ] = await Promise.all([
            //     response.json(),
            //     response.json()
            // ])

            // const { name } = json1

            // const todosOsJson = {
            //     ...json1,
            //     json2
            // }

            // const nameExists = name ? "sim" : "não"

            // todosOsJson = {
            //     name,
            //     idade,
            //     json2: {
            //         name,
            //         idade
            //     }
            // }
        }
    } catch (error) {
        console.log("Error: ", error);
    }
}

findAll();