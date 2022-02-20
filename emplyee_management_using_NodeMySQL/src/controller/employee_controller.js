const dbConnection = require('../server/mysql_server');

exports.getAllEmployee = (req,res)=>{
    dbConnection.query('SELECT * FROM employee_management', (err, rows, fields)=>{
        if(err){
            return res.send('error: ', err);
        }

        return res.send(rows);
    })
}

exports.getOneEmployee = (req,res)=>{
    dbConnection.query('SELECT * FROM employee_management WHERE id = '+req.params.id, (err,rows,fields)=>{
        if(!err){
            return res.send(rows);
        }
        return res.send(err);
    })
}

exports.addOneEmployee = (req,res)=>{
    const emp = req.body;
    dbConnection.query('INSERT INTO employee_management SET ?', emp, (err, rows, fields)=>{
        if(!err){
            return res.send(rows);
        }
        return res.send(err);
    });
}

exports.updateOneEmployee = (req,res)=>{
    const emp = req.body;
    dbConnection.query('SELECT * FROM employee_management WHERE id = ?', [req.params.id], (err,rows,fields)=>{
        const updatedData = {...rows[0], ...emp};
        dbConnection.query('UPDATE employee_management SET ?', updatedData, (err, rows, fields)=>{
            return res.send(updatedData);
        })
    });
}

exports.deleteOneEmployee = (req,res)=>{
    dbConnection.query('DELETE FROM employee_management WHERE id = ?', [req.params.id], (err, rows, fields)=>{
        if(!err){
            return res.send("Deleted successfully!");
        }else{
            return res.send(err);
        }
    })
}