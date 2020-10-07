import {Request, Response} from 'express';
import db from '../database/connection';

export default class ControllersIdea{
    async index(req: Request, res: Response){
        const points = await db('ideias')
       .select('*');
        return res.json(points);
    }
    async create(req: Request, res: Response){
        const {title, image, url, description, category } = req.body;
        const trx = await db.transaction();

        try {
            await trx('ideias').insert({
                title,
                image,
                url,
                description, 
                category
            });
            await trx.commit();
			return res.status(201).send();
        }catch(err){
        console.log(err);
     }
    }
}
    
