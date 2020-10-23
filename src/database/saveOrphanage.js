function saveOrphanage(db, orphange) {
  return db.run(`
    INSERT INTO orphanages (
        lat, 
        lng, 
        name, 
        about,
        whatsapp, 
        images, 
        instructions, 
        opening_hours, 
        open_on_weekends
    ) VALUES (
        "${orphange.lat}",
        "${orphange.lng}",
        "${orphange.name}",
        "${orphange.about}",
        "${orphange.whatsapp}",
        "${orphange.images}", 
        "${orphange.instructions}", 
        "${orphange.opening_hours}",
        "${orphange.open_on_weekends}"
    );
`);
}

module.exports = saveOrphanage;
