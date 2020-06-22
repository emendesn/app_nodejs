const express = require('express');
const Motor = require('./tblmotorista');
const Veicu = require('./tblveiculo');
const router = express.Router();

router.post('/cad_mot', async (req, res ) => {
    const { cpf } = req.body;

    if ( await Motor.findOne( { cpf } )) {
        return res.status(400).send( { error: 'Motorista ja cadastrado' } )
    } else {
        try {
            const mot = await Motor.create( req.body);

            return res.send( { mot });
        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro motorista' } )
        } ;
    } ; 
});

router.get('/lst_mot', async (req, res ) => {
    try {
        const lst = await Motor.find().populate(['veiculos']);

        return res.send( { lst });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao carregar lista de motorista' } )
    } ;
});

router.delete('/dlt_mot/:Id', async (req, res ) => {
    try {
        await Motor.findByIdAndRemove(req.params.Id);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao deletar o motorista' } )
    } ;
});

router.put('/upd_mot/:Id', async (req, res ) => {
    try {
        const { nome, sobrenome, cpf, nascimento, status, cadastro } = req.body;
        const atualiza = Date.now;

        const mot = await Motor.findByIdAndUpdate(req.params.Id, { nome, sobrenome, cpf, nascimento, status, cadastro, atualiza }, { new: true } );

        return res.send( { mot } );
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao atulizar dados do motorista' } )
    } ;
});

router.post('/cad_vei', async (req, res ) => {
    const { renavan } = req.body;

    if ( await Veicu.findOne( { renavan } )) {
        return res.status(400).send( { error: 'Veiculo ja cadastrado' } )
    } else {
        try {
            const vei = await Veicu.create( req.body);

            return res.send( { vei });
        } catch (err) {
            return res.status(400).send({ error: 'Falha no cadastro veiculo' } )
        } ;
    } ; 
});

router.get('/lst_vei', async (req, res ) => {
    try {
        const lst = await Veicu.find();

        return res.send( { lst } );
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao carregar lista de veiculos' } )
    } ;
});

router.delete('/dlt_vei/:Id', async (req, res ) => {
    try {
        await Veicu.findByIdAndRemove(req.params.Id);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao deletar o veiculo' } )
    } ;
});

router.put('/upd_vei/:Id', async (req, res ) => {
    try {
        const { proprietario, placa, renavan } = req.body;

        const vei = await Veicu.findByIdAndUpdate(req.params.Id, { proprietario, placa, renavan }, { new: true } );

        return res.send( { vei } );
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao atulizar dados do veiculo' } )
    } ;
});


router.put('/cad_vei_mot/:Id', async (req, res ) => {

    try {

        const { veiculos } = req.body;

        const mot_vei = await Motor.findById( req.params.Id );

        await Promise.all( veiculos.map( async Vei => { 
            const motoristaVeiculo = new Vei( { ...Vei, mot_vei: mot_vei._Id });
    
            await motoristaVeiculo.save();

            mot_vei.veiculos.push(motoristaVeiculo);

        }));

        await mot_vei.save();
    
        return res.send( { mot_vei } );
    } catch (err) {
        return res.status(400).send( { error: 'Erro na vinculacao de veiculos' });
    }

});


module.exports = router;