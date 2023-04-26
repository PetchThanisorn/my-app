import { useState } from "react";
function Item(name,isPacked){
    return (<li>{name} {isPacked && '✔'} </li>);
    }

export default function PackingList(){
    const[search,setSearch]=useState("");
    const items=[
        {id:1,
        name:"Iphone 20 ProMax",
        price:70000
        },
            {id:2,
            name:"Iphone 30 ProMax",
            price:90000
            },
                {id:3,
                name:"Iphone 40 ProMax",
                price:100000
                },
    ];
    const filterlist=items.filter(item=> item.name.includes(search));
                const itemList=items.map(item=>
                <li key={item.id}>
                    ID      :     {item.id+" "}
                    Name    :   {item.name+" "}
                    Price   :  {item.price}
                </li>);
                const filterList2=filterlist.map(item=>
                    <li key={item.id}>
                        ID       :     {item.id+" "}
                        Name    :   {item.name+" "}
                        Price   :  {item.price}
                    </li>);
                    const onTextChange=(event)=>{
                        setSearch(event.target.value);
                    }
    return(
    <>
    Search :
    <input
            type="text"
            onChange={event=>onTextChange(event)}
            />
        <h1>Banana Store</h1>
        <ul>
            {itemList}
        </ul>
        <h1>Search Result</h1>
        <ul>
            {filterList2}
        </ul>    
    </>
    );
}