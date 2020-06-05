const urlAPI = 'https://rickandmortyapi.com/api';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: {},
            episodes: {},
            characters: {},
            weather: {},
            money: {},
            path: 'http://localhost:3000',
            currentUser: null,
            username: '',
            password: '',
            errors: null,
            active: {},
            location:{}
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
                    headers: {
                        'Content-Type': 'application/json' //estoy enviando en formato json
                    }
                })  
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {
                            const aut= {
                                currentUser: data,
                                username: '',
                                password: '',
                                errors: null
                            }
                            localStorage.setItem("auth", JSON.stringify(aut))
                            setStore({...aut})
                            history.push("/");
                        }
                    })
            },
            revalidate: user =>{
                // console.log(user, {...user}, "soy redirect")
                setStore({
                    ...user
                })
            },

            getUsers: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        // console.log(data)
                        setStore({
                            users: data
                        })
                    })
            },
            getEpisodes: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        // console.log(data)
                        setStore({
                            episodes: data
                        })
                    })
            },
           getCharacters: async url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        // console.log(data)
                        setStore({
                            characters: data
                        })
                    })
            },
           getLocation: async url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        // console.log(data)
                        setStore({
                            location: data
                        })
                    })
            },
            getChar: (id) => {
                fetch(`${urlAPI}/character/${id}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                        // console.log(data);
                        setStore({
                            active: data
                        });
                    })
            },

        }
    }
}
export default getState;



