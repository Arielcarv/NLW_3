const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');


Database.then(async (db) => {
    
    
    // Insert data on tables
    // await saveOrphanage(db, { 
    //     lat: "-21.718141",
    //     lng: "-41.322227",
    //     name: "Projeto Aconchego", 
    //     about: "Atualmente 35 crianças estão acolhidas no Projeto Aconchego. Estão abrigadas numa casa no Parque Tarcísio Miranda, meninos e meninas com idades de zero a seis anos.",
    //     whatsapp: "+5522981750904",
    //     images: [
    //         "https://www.campos.rj.gov.br/up/photos.php?id_fotos=95644", 
    //         "https://www.campos.rj.gov.br/up/photos.php?id_fotos=95646",
    //         "https://www.campos.rj.gov.br/up/photos.php?id_fotos=15920"
    //     ].toString(),
    //     instructions: "Para visitar a instituição, entre em contato pelo telefone 2227384866, e marque uma vista com o responsável . Todas as instituições gostam de ser visitadas, desde que se tenha o cuidado de marcar antes a visita.", 
    //     opening_hours: "Segunda a Sexta Das 15h até 16h. Sábados, domingos e feriados, das 14h às 15h",
    //     open_on_weekends: "1"
    // })

    // Consult all data in the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // Consult only one orphanage, by id.
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage) 

    // //Remove id data from table
    // console.log(await db.run('DELETE FROM orphanages'))
})