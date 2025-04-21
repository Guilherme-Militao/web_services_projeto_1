import crypto from "crypto"; 

const disciplinasRepository = ()=>{

    const disciplinas = [];

    const create = ({nome, cargaHoraria, obrigatoria}) =>{
        const newItem = {
            id:crypto.randomUUID(),
            nome,
            cargaHoraria,
            obrigatoria
        };
        disciplinas.push(newItem);
        return newItem;
    };

    const findAll = () =>{
        return disciplinas;
    };

    const findByNome = (nome) =>{
        return disciplinas.filter( d => {return d.nome.toLowerCase().includes(nome.toLowerCase())});
    };

    const findByCargaHoraria = (cargaHoraria)=>{
        return disciplinas.filter( d=>{ return d.cargaHoraria === Number(cargaHoraria)});
    }

    const findById = (id) =>{
        return disciplinas.find( d => d.id === id);
    }

    const updateDisciplina = (id, data) =>{

        const disciplina = disciplinas.find(d => d.id === id);

        if(!disciplina) return null;

        if(data.nome !== undefined)disciplina.nome = data.nome;
        if(data.cargaHoraria !== undefined &&Number.isInteger(data.cargaHoraria))disciplina.cargaHoraria = data.cargaHoraria;
        if(data.obrigatoria !== undefined)disciplina.obrigatoria = data.obrigatoria;

        return disciplina;
    };

    const removeDisciplina = (id) => {

        const index = disciplinas.findIndex(d=>d.id === id);
        
        if(index !== -1){
            disciplinas.splice(index,1);
            return true;
        }

        return false;
    }

    return{
        create,
        findAll,
        findByNome,
        findByCargaHoraria,
        findById,
        updateDisciplina,
        removeDisciplina
    };
}
export default disciplinasRepository;