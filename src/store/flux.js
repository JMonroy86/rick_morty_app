const getState = ({ getStore, getActions, setStore}) =>{
    return{
        store:{
            users:{},
            episodes:{},
            characters:{},
            weather:{},
            money:{}
        },
        actions: {

            
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

