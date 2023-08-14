
array = {
   token: "",
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   avatar: "",
   id: "",
};


const IsEmptys = (obj) => {
   let arr = Object.values(obj);
   return arr.every(v => !v);
}

console.log(IsEmptys(array));