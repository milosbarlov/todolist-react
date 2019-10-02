
export default class DB {
    constructor(table = 'projects'){
        this.__addTable(table);
        this.__table = table;
    }

    __table = '';

    getAll = (field = null,value = null) => {
        let response = [];
        const data = this.__findTable();
        if(!field){
            response = data;
        }else{
            data.forEach((row)=>{
                if(row[field] === value){
                    response.push(row);
                }
            });
        }

        return response;
    };

    getOne = (field = null,value = null) =>{
        const data = this.__findTable();
        if(!field){
            return data;
        }
        return data.find((row)=>{
            return row[field] === value;
        });
    };

    update = (id,data) => {
        const task = this.getOne('id',id);
        if(task){
            const updatedTask = {...task,...data};
            this.__updateLocalStorage(id,updatedTask);
        }
    };

    create = (data) => {
        this.__updateLocalStorage(null,{...data,id:this.__nextId()});
    };

    delete = (id) => {
        const models = this.getAll().filter(function(item) {
            return item.id !== id;
        });

        this.__updateLocalStorage(null,models);
        return models;
    }

    //***********************PRIVATE FUNCTION ****************************************//
    __updateLocalStorage = (id = null,newData = null) => {
        let data = this.getAll();
        if(id){
            data[data.findIndex(el => el.id === newData.id)] = newData;
        }else{
            data.push(newData);
        }

        localStorage.setItem(this.__table,JSON.stringify(data));
    };

    __addTable = key =>{
        if(localStorage.getItem(key) === null){
            localStorage.setItem(key,JSON.stringify([]))
        }
    };

    __findTable = () => {
        return JSON.parse(localStorage.getItem(this.__table)) || []
    };

    __nextId = () => {
        let data = this.getAll();
        return data.length > 0 ? data[data.length-1].id + 1 : 1;
    }
}


