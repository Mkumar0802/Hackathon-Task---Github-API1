var form=document.getElementById("element")

element.addEventListener('submit',function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    var originalname=search

   document.getElementById("result").innerHTML=""


    async function githubapi(){
        let result= await fetch('https://api.github.com/users/'+originalname)
        let data=await result.json()
        return data;
    }

    githubapi().then((data)=>{console.log(data)})
    
    document.getElementById("result").innerHTML = `
      <a target="_blank"href="https://www.github.com/${originalname}"> <img src="${'https://avatars2.githubusercontent.com/'+originalname}"/></a>
`
})
    var respo = document.getElementById("elerespo")

    respo.addEventListener('submit',function(ele){
        ele.preventDefault()
        var search=document.getElementById("search").value

        var originalname=search
    
       document.getElementById("result").innerHTML=""
   
        async function gitrespo(){
            let result= await fetch('https://api.github.com/users/'+originalname)
            let data=await result.json()
            return data;
        }
        gitrespo().then((data)=>{console.log(data)})

        document.getElementById("result1").innerHTML =`<a target="_blank"href="https://api.github.com/repos/'${orginalnmae}/{repo}">`
            
    }
    )
