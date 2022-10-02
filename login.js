
//   let data=JSON.parse(localStorage.getItem("userdata"))
//   console.log(data);
   document.querySelector("form").addEventListener("submit",logging);

   
       function logging(event){
         event.preventDefault();
        
            let email=document.querySelector(".email").value
            email.innertext=value
            console.log(email)
         
      
       
          let password=document.querySelector(".password").value
          console.log(email,password)
        }
    //       let flag =false
    //    for(i=0;i<data.length;i++){
    //        if(person_email==data[i].person_email &&password==data[i].password){
    //            flag=true
    //        }
    //    };
    //    if(flag==true){
    //        alert("login successfull")
    //    }else{
    //        alert("please signup")
       
    //    }
//    }
   

