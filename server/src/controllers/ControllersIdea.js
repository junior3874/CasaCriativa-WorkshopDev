const db = require('../database/connection.js');

module.exports =  class ControllersIdea{
    async index(req, res){
        const points = await db('ideias')
            .select('*');
        const imagePoints = await db('images')
            .select('*');

        points.image = imagePoints;
        const data = points;
        
        
        return res.json(data);
    }
    async create (req, res){
        const {title, url, description, category} = req.body;
        const {path, originalname: name, filename: key } = req.file
        console.log(req.file);

        const dataIdeia = {
            title,
            url,
            description, 
            category
        }
        const dataImage = {
            name,
            path,
            key
        }
        const trx = await db.transaction();

        try {
            await trx('images').insert(dataImage);
            await trx('ideias').insert(dataIdeia);
            await trx.commit();

			return res.json([{dataIdeia}, {dataImage}]);
        }catch(err){
        console.log(err);
     }
    }
}
    
