const express = require('express');
const bodyParser = require('body-parser');
const db = require('./connection');
const port = 8000;

let app = express();
app.use(bodyParser.json());

app.get('/multas/:cpf', (req, res)=>{
    let cpf = req.params.cpf;
    let cmd_selectAll = 'SELECT * FROM MULTAS WHERE CPF = ?';
    db.query(cmd_selectAll,cpf,(err, rows)=>{
        res.status(200).json(rows);
    });
});

app.post('/multas',(req, res)=>{
    let dados = req.body;
    let cmd_insert = 'INSERT INTO MULTAS SET ?';
    db.query(cmd_insert,dados,(error, result)=>{
        if(error){
            res.status(400).json({message:"Erro: " + error})
        }else{
            res.status(201).json({message: result.insertId +"Multa salva!"});
        }
    });
});

app.delete('/multas/:cod',(req, res)=>{
    let cod = req.params.cod;
    let cmd_delete = "DELETE FROM MULTAS WHERE COD = ?";
    db.query(cmd_delete,cod,(error,result)=>{
        if(error){
            res.status(400).json({message:"Erro: " + error})
        }else{
            res.status(201).json({message:"Multa Excluida!"});
        }
    });
});

app.listen(port,()=>{
    console.log("Projeto executando na porta " + port);
});