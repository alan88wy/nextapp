// Can make database call here 
// Can access all articles from data from http://localhost:5000/api/articles

import { articles } from '../../../data'

export default function handler (req, res) {
    res.status(200).json(articles)
}