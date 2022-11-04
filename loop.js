const shyam= [12, 25, 58, 36]
for(let i=0; i<shyam.length; i++)
console.log("Percentage of student  = " +shyam[i] + "(%)")

/** For Each Loop */

const shyamm= [12, 25, 58, 36]
shyamm.forEach((item)=>{
    console.log("I have "+item +"Rs")
})

/**Map property */

const shyammm= ["VIKAS", "VIJAY", "KETAN", "VISHAL"]
const val =shyammm.map((student,index)=>{
    console.log("I have friend, and name is " +student)
    return (index+" Done")
})
console.log(val)