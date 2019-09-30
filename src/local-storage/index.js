
class DB {
    constructor(table = 'projects'){
        this.__addTable(table);
        this.table = table;
    }

    table = '';

    getAll = (field = null,value = null) => {
        let response = [];
        const data = this.__findTable();
        if(!field){
            response = data;
        }
        data.filter((row)=>{
            if(row[field] === value){
                response.push(row);
            }
        });

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

    __addTable = key =>{

        if(localStorage.getItem(key) === null){
            localStorage.setItem(key,JSON.stringify([]))
        }
    };

    __findTable = () => {
        return JSON.parse(localStorage.getItem(this.table)) || []
    }
}

export default DB;

