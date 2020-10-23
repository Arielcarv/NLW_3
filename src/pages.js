const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
    
    index(req,res) {
        return res.render('index')
    },

    async orphanage(req, res) {

        const id = req.query.id;
        try { // To Databank, try and conclude if it has errors
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]

            // Check if orphanage opens on weekend or not to return to .hbs
            // if(orphanage.open_on_weekends == "0") { 
            //     orphanage.open_on_weekends = false
            // } else {
            //     orphanage.open_on_weekends = true
            // }
            // TERNARY IF //
            orphanage.open_on_weekends = orphanage.open_on_weekends == "1" ? true : false;


            return res.render('orphanage',{orphanage: orphanage})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }       
        
    },

    async orphanages(req, res) {
        try { // To Databank, try and conclude if it has errors
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }       
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },

    async saveOrphanage(req, res) {
        //console.log(req.body)
        const fields = req.body
        //console.log(Object.values(fields).includes(''))
        // Validate If all spaces are filled
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }

        // Save an Orphanage
        try {
            const db = await Database
            await saveOrphanage(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends, 
            })
            // Redirect
            return res.redirect('/orphanages')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        
    }
}