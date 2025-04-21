import express from 'express';
import disciplinasRepository from './repository.js';


const app = express();
const port = 3000;
const disciplinas = disciplinasRepository();

app.use(express.json());

app.get("/disciplinas", (req, res)=>{

    const nome = req.query.nome;
    const cargaHoraria = req.query.cargaHoraria;

    if(nome){
        const result = disciplinas.findByNome(nome);
        return res.status(200).json(result);
    }
    
    if(cargaHoraria){
        const result = disciplinas.findByCargaHoraria(Number(cargaHoraria));
        return res.status(200).json(result);
    }

    return res.status(200).json(disciplinas.findAll());
})

app.get("/disciplinas/:id", (req, res) => {
    const { id } = req.params;
    const disciplina = disciplinas.findById(id);

    if (!disciplina) {
        return res.status(404).json({ message: "Disciplina não encontrada" });
    }

    return res.status(200).json(disciplina);
});


app.post("/disciplinas", (req, res)=>{
    const {nome, cargaHoraria, obrigatoria} = req.body;
    const disciplina = disciplinas.create({nome, cargaHoraria, obrigatoria});
    res.status(201).json(disciplina);
})

app.put("/disciplinas/:id", (req, res)=>{

    const {id} = req.params;
    const {nome, cargaHoraria, obrigatoria} = req.body;

    const disciplina = disciplinas.updateDisciplina(id, {nome, cargaHoraria, obrigatoria});

    if(!disciplina) return res.status(400).json({message: "Disciplina não encontrada"});

    return res.status(200).json(disciplina);

})
app.delete("/disciplinas/:id", (req, res) => {
    const { id } = req.params;
    const removed = disciplinas.removeDisciplina(id);

    if (!removed) {
        return res.status(404).json({ message: "Disciplina não encontrada" });
    }

    return res.status(204).send();
});

app.get("/info", (req, res) =>{
    res.status(200).json({
        message:'API disponível',
        author: "Guilherme Militão",
        versao: "v1"
    });
})

app.listen(port,()=>{
    console.log(`Escutando aplicação em http://localhost:${port}`);
})