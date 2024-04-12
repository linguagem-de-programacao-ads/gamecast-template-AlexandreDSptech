class Schedule {
    async findAll() {
        const url = 'https://660f44b4356b87a55c510e3f.mockapi.io/schedule'
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

                const listSchedule = responseJson.map(schedule => {
                    return schedule
                })
                console.log('SCHEDULE JSON: ', listSchedule)
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    
    async findById() {
        
    }
    
    async insert() {
    
    }
    
    async update() {
        
    }
    
    async deleteById() {
        
    }
    
    async deleteAll() {
    
    }   
}