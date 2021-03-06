const pontos = [];

function loadSeed() {
    const novosPontos = [
            {
                nome: "Centro Histórico",
                descricao: "",
                imagem: "resources/img/teaser/ch/ch.jpg",
                altImagem: "Imagem do Centro Histórico",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Areia Vermelha",
                descricao: "",
                imagem: "resources/img/teaser/av/1.jpg",
                altImagem: "Imagem do Areia Vermelha",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Centro Cultural São Francisco",
                descricao: "",
                imagem: "resources/img/teaser/ccsf/1.jpg",
                altImagem: "Imagem do Centro Cultural São Francisco",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Bica",
                descricao: "",
                imagem: "resources/img/teaser/bica/1.jpg",
                altImagem: "Imagem da Bica",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Estação Cabo Branco",
                descricao: "",
                imagem: "resources/img/teaser/ecb/1.jpg",
                altImagem: "Imagem do Estação Cabo Branco",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Farol do Cabo Branco",
                descricao: "",
                imagem: "resources/img/teaser/farol/1.jpg",
                altImagem: "Imagem do Farol do Cabo Branco",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Parque Solón de Lucena",
                descricao: "",
                imagem: "resources/img/teaser/lagoa/1.jpg",
                altImagem: "Imagem do Parque Solón de Lucena",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Museu da cidade de João Pessoa",
                descricao: "",
                imagem: "resources/img/teaser/museujp/1.jpeg",
                altImagem: "Imagem do Museu da cidade de João Pessoa",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Museu do Artesanato Paraibano",
                descricao: "",
                imagem: "resources/img/teaser/museuart/1.jpg",
                altImagem: "Imagem do Museu do Artesanato Paraibano",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Praia do Cabo Branco",
                descricao: "",
                imagem: "resources/img/teaser/pcb/1.jpg",
                altImagem: "Imagem do Praia do Cabo Branco",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Praia do Jacaré",
                descricao: "",
                imagem: "resources/img/teaser/pj/1.jpg",
                altImagem: "Imagem do Praia do Jacaré",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Piscinas Naturais do Seixas",
                descricao: "",
                imagem: "resources/img/teaser/pns/1.jpg",
                altImagem: "Imagem do Piscinas Naturais do Seixas",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Praça Vidal de Negreiros",
                descricao: "",
                imagem: "resources/img/teaser/100reis/1.jpg",
                altImagem: "Imagem da Praça Vidal de Negreiros",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            },
            
            {
                nome: "Praia do Seixas",
                descricao: "",
                imagem: "resources/img/teaser/ps/1.jpg",
                altImagem: "Imagem da Praia do Seixas",
                mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15836.216183162982!2d-34.88679940458585!3d-7.119735570952628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scentro%20hist%C3%B3rico%20de%20jo%C3%A3o%20pessoa!5e0!3m2!1spt-BR!2sbr!4v1638301328009!5m2!1spt-BR!2sbr",
                valor: 0
            }
];

    for ( const ponto of novosPontos) {
        create(ponto)
    };
};

function create(ponto) {
    const id = pontos.length + 1;
    const novoPonto = {...ponto, id, avaliacaoUsuario: 0};

    pontos.push(novoPonto);

    return novoPonto;
};

function readAll(){
    return pontos;
};

function readByNome(nome) {
    const ponto = (pontos.filter(ponto => (ponto.nome).toLowerCase().includes(nome.toLowerCase())));

    if (ponto[0] === undefined) {
        return undefined;
    } else {
        return ponto;
    }
}

function readById(id) {
    const ponto = (pontos.find(ponto => ponto.id === id));

    console.log(ponto)

    if (ponto) {
        return ponto;
    } else {
        return undefined;
    }
}

export default {create, readAll, loadSeed, readByNome, readById}