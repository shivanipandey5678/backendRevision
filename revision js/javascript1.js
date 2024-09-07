// let a=(()=>{
//     return ((y)=>{
//        return ((z)=>{
//         return ((c)=>{
//             return y+z+c
//         })
//        })
//     })
// })


// let a=(x)=>{
//      return(y)=>{
//       return (z)=>{
//          return(c)=>{
//             return x+y+z+c
//          }
//       }
//     }
// }



const a=(x)=>(y)=>(z)=>(c)=>x+y+z+c;

console.log(a(10)(2)(3)(4))