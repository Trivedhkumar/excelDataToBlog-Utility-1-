let speakerName = document.getElementById("name")
let category = document.getElementById("category");
let blogName = document.getElementById("blogname");
let blogUrl = document.getElementById("blogurl");
let convertButton = document.getElementById("convert-button");
let resultArea = document.getElementById("result");
let nameArr,categoryArr,blogNameArr,blogUrlArr;
const nameArrFunc = ()=> speakerName.value.split("\n");
const categoryArrFunc = ()=> category.value.split("\n");
const blogNameArrFunc = ()=> blogName.value.split("\n");
const blogUrlArrFunc = ()=> blogUrl.value.split("\n");

const dataprocessor = (name,category,blogname,blogurl)=>{
    let result = [];
  if(name.length === category.length && category.length === blogname.length && blogname.length === blogurl.length){
    for(let i =0;i<blogname.length;i++){
      let arr = [name[i],category[i],`<a href='${blogurl[i]}' target='_blank'>${blogname[i]}</a>`]
      result.push(arr)
    }
  }
  resultArea.value= "Check the log"
  console.log(result);
  return result;
  }
  
  const convertData = () => dataprocessor(nameArrFunc(),categoryArrFunc(),blogNameArrFunc(),blogUrlArrFunc());