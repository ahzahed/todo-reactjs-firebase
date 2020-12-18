import { Button, List, ListItem,ListItemText, Modal } from '@material-ui/core'
import moment from 'moment'
import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({todo:{id,todo}}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    
    const updateTodo = () =>{
        db.collection('todos').doc(id).set({
            todo: input,
            
        },{merge:true})
        setOpen(false);
    }
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={e=>setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Update Todo</h1>
                    <input placeholder={todo} value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button onClick={updateTodo}>Update</button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={todo} secondary={moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}/>
                </ListItem>
                <Button onClick={e=>setOpen(true)}><EditIcon /></Button>
                <Button onClick={()=>db.collection('todos').doc(id).delete()}><DeleteForeverIcon /></Button>
            </List>
        </React.Fragment>
    )
}

export default Todo
