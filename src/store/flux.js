const getState = ({ getStore, getActions, setStore}) =>{
    return{
        store:{
            users:{},
            episodes:{},
            characters:{},
            weather:{},
            money:{},
            path: 'http://localhost:3000',
            currentUser: null,
            username: '',
            password:'',
            errors: null,
        },
        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value,
                   
                })
            },
            login: (e, history) => {
                e.preventDefault();
                const store = getStore();
                
                fetch("https://reqres.in/api/register", {
                    method: 'POST',
                    body: JSON.stringify({
                        username: store.username,
                        password: store.password
                    }),
                    headers:{
                        'Content-Type':'application/json' //estoy enviando en formato json
                    }
                })
                .then(resp => resp.json())
                 .then(data => {
                    console.log(data)
                    if(data.msg){
                        setStore({
                            errors: data
                        })
                    }else{
                        setStore({
                            currentUser:data,
                            username:'',
                            password:'',
                            errors: null
                        })
                        history.push("/");
                    }
                })
            },

            
            getUsers: url =>{
                fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    // console.log(data)
                    setStore({
                        users : data
                    })
                })
            },
            getEpisodes: url =>{
                fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    // console.log(data)
                    setStore({
                        episodes : data
                    })
                })
            },
            getCharacters: async url =>{
                fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    // console.log(data)
                    setStore({
                        characters : data
                    })
                })
            },
            
        }
    }
}
export default getState;

