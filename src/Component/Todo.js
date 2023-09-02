import React, { useState } from 'react';

const Todo = () => {

    const [input, setInput] = useState();
    const [item, setItem] = useState([]);
    const [check, setCheck] = useState([]);

    const AddItem = () =>{
        if(input){
            setItem([...item,input]);
            setInput('');
        }
        else{
            alert("Please Enter a valid item");
        }
    }

    const deleteItem = (index) =>{ 
        console.log(index);        
        const updateItem = item.filter((value, id) => {
            return id !== index;
        });
        setItem(updateItem);
    } 

    const handleCheck = (e) =>{
        let updatedList = [...check];
        if(e.target.value){
            updatedList = [...check, e.target.value];
        }
        else{
            updatedList.splice(check.indexOf(e.target.value),1);
        }
        setCheck(updatedList)
    }

    const isChecked = (value)=>
        check.includes(value) ? "checked-item" : "not-checked-item";
    
    // const checkedItems = check.length ? check.reduce((total, value) =>{ 
    //     return total+ ", "+ value; }) : '';
    const checkedItems = check.length

  return (
    <>
    <div className="container">
        <h3 className='pb-5'>Todo's List</h3>
        <div className="w-50 mx-auto">
            <div class="input-group form-floating mb-3 text-black">
                <input className="rounded form-control" type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Add todos'/>
                <label for="floatingInput">Add todo's</label>
                <button className='btn btn-primary btn-lg rounded w-25 ms-2' onClick={AddItem}>Add</button><br/>
            </div>
        { item &&  item.map((value, id)=>{
            return (
                   <>
                    <div className='bg-white text-black mt-3 d-flex justify-content-between align-items-center p-3 rounded' key={id}>
                    <input value={value} type="checkbox"  onChange={handleCheck}/>
                    <span className={isChecked(value)}> {value}</span>
                        <div className='d-flex gap-4'>
                            {/* <input type="checkbox" /> */}
                            <span style={{cursor:'pointer'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </span>
                            <span style={{cursor:'pointer'}} onClick={()=> deleteItem(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                            </span>
                        </div> 
                    </div> 
                   </> 
                )
            })
        }<div>
        {`Items checked are: ${checkedItems}`}
      </div>
        </div>
    </div>
    </>
  );
}

export default Todo;
