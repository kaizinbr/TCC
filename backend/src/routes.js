import express from 'express';
import seed from '../../database/data-pontos/seed.js'; 
import readData from '../../database/data-pontos/datapontos.js';
import { pontos, getId } from './pontos.js';

const router = express.Router();

router.post('/create-pontos', (req, res) => {
    let ponto = req.body;
  
    // junta o novo ponto aos do Seed, adicionando sempre na última posição
    seed.create(ponto)
  
    pontos.push(ponto);
    res.status(200).json(ponto);
});
  
router.get('/get-pontos', (req, res) => {
    // envia os pontos do Seed automaticamente
    const pontos = seed.readAll();
    res.status(200).json(pontos);
});

router.get('/get-datapontos', (req, res) => {
    // envia os dados das páginas individuais dos pontos automaticamente
    const pontos = readData();
    res.status(200).json(pontos);
});
  
export default router;