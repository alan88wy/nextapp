// Get article by id
// access using http://localhost:5000/api/articles/<id>


import { articles } from '../../../../data'

export default function handler ({query : {id}}, res) {

    // req.query.id

    const filtered = articles.filter(article => article.id == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message : `Article with the id of ${id} is not found.`})
    }
}