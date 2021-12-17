import slugify from 'slugify'
 
const urlSlug= (array)=> 
{
  console.log(slugify(array));
}
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const string= "une phrase très longue pour un test";
const array = string.slice(" ");
urlSlug(string);