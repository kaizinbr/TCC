import express from 'express';
import seed from '../../database/data-pontos/seed.js'; 
import readData from '../../database/data-pontos/datapontos.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);


const router = express.Router();

router.post('/create-pontos', (req, res) => {
    let ponto = req.body;
  
    // junta o novo ponto aos do Seed, adicionando sempre na última posição
    seed.create(ponto)

    res.status(200).json(ponto);
});
  
router.get('/get-pontos', (req, res) => {
    // envia os pontos do Seed automaticamente e fora Bolsonaro!!!
    const pontos = seed.readAll();
    res.status(200).json(pontos);
});

router.get('/get-pontos/nome/:nome', (req, res) => {
    // envia os pontos do Seed automaticamente
    const ponto = seed.readByNome(req.params.nome);

    if(ponto) {
        res.status(200).json(ponto);
    } else {
        res.status(404).json("Não encontrado");
    }
});

router.get('/get-pontos/id/:id', (req, res) => {
    // envia os pontos do Seed automaticamente
    const ponto = seed.readById(parseInt((req.params.id)));

    if(ponto) {
        res.status(200).json(ponto);
    } else {
        res.status(404).json("Não encontrado");
    }
});

router.get('/get-datapontos', (req, res) => {
    // envia os dados das páginas individuais dos pontos automaticamente
    const pontos = readData();
    res.status(200).json(pontos);
});

router.post('/create-user', (req, res) => {
  
});

router.get('/pontos/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/base-ponto.html'));

})
  
export default router;