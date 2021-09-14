const grid = new xGrid({
id: '#lista-carros',
width: 1000,
height:145,
heightLine:35,
columns: {
    'marca':{
        dataField: 'marca',
        width: '20%',
        style: 'color: default; font-size: 22px'
    },
    'placa':{
        dataField: 'placa',
        width: '20%',
        style: 'color: default; font-size: 22px'
    },
    'modelo':{
        dataField: 'modelo',
        width: '20%',
        style: 'color: default; font-size: 22px'
    },
    'ano':{
        dataField: 'ano',
        width: '20%',
        style: 'color: default; font-size: 22px'
    },
    'cor':{
        dataField: 'cor',
        width: '20%',
        style: 'color: default; font-size: 22px'
    },
},
sideBySide:{
    id: '#formulario',
    frame:{ 
        id: '#divButtons',
            btnCancel: function () {
            grid.focus();
        },
            btnInsert: function () {
            grid.focusField('marca');
        },
            btnEdit: function () {
            if (!grid.dataSource()) {
            alert('Selecione o registro que deseja alterar.');
            return false;
            }
        },
            btnDelete: function () {
            if (!grid.dataSource()) {
            alert('Selecione o registro que deseja excluir.');
            return false;
            }
        },
            btnSave: function () {
            if (grid.getDuplicityAll())
            return false;
            var diff = grid.differenceTwoObject();
        },


    }

}
})

        var json = [{
            marca: 'Ford',
            placa: '000-000',
            modelo: '00',
            ano: '2000',
            cor: 'Prata'
    }, {
            marca: 'Volkswagem',
            placa: '111-111',
            modelo: '01',
            ano: '2001',
            cor: 'Vermelho'

    }, {
            marca: 'Fiat',
            placa: '222-222',
        modelo: '02',
        ano: '2002',
        cor: 'Preto'
    }]
    grid.create(json)