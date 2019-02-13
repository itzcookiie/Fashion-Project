class API {

    static init() {
        this.baseURL = 'http://localhost:3001'
        this.signinURL = `${this.baseURL}/signin`
        this.signupURL = `${this.baseURL}/signup`
        this.wardrobeURL = `${this.baseURL}/wardrobe`
        this.validateURL = `${this.baseURL}/validate`
        this.garmentsURL = `${this.baseURL}/garments`
        //This URL is for creating outfits
        this.outfitsURL = `${this.baseURL}/outfits`
        this.getOutfitsURL = `${this.baseURL}/outfit`
        // this.singleGarmentURL = `${this.garmentsURL}/`
    }

    static getOutfits () {
        return this.get(this.getOutfitsURL)
    }

    static createOutfit (outfit) {
        const token = localStorage.getItem('token')
        return fetch(this.outfitsURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Authorization': token},
            body: JSON.stringify( outfit )
        }).then(response => response.json())
    }

    static signin (user) {
        return fetch(this.signinURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json())   
    }

    static signup (user) {
        return fetch(this.signupURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    static addGarments (category, colour, image_url) {
        const token = localStorage.getItem('token')
        return fetch(this.garmentsURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
            'Authorization': token},
            body: JSON.stringify({
                category,
                colour,
                image_url
            })
        }).then(response => response.json())
    }

    static deleteGarment (id) {
        return fetch(`${this.garmentsURL}/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

    static get (url) {
        const token = localStorage.getItem('token')
        return fetch(url, {
            headers: {'Authorization': token},
        }).then(response => response.json())  
    }

    static validate () {
        return this.get(this.validateURL)
    }

    static getWardrobe () {
        return this.get(this.wardrobeURL)
    }
}

API.init()

export default API