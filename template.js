const array =  [
    {
        title : "shyam",
        mobile : "Realme"
    },
    {
        title : "Vikas",
        mobile : "oneplus"
    },
    {
        title : "Saloni",
        mobile : "oneplus"
    },
    {
        title: "Ruby",
        mobile : "Vivo"
    },
    {
        title : "Sakshi",
        mobile : "Redmi"
    },
    {
        title: "Kunal",
        mobile : "Apple"
    }
    ]
    
    array.map((array) => {
        console.log(`My name is ${array['title']} and I have ${array['mobile']} phone.`)
    })