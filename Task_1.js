const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlString, "text/xml");
let result ={};
result.list = [];
const students = xmlDom.querySelectorAll("student");
for (let student of students) {
    let age = student.querySelector("age");
    let prof = student.querySelector("prof");
    let firstName = student.querySelector("first"); 
    let lastName = student.querySelector("second");
    let name = student.querySelector("name");
    let lang = name.getAttribute("lang");
    result.list.push({name: firstName.textContent + ' ' + lastName.textContent, age: age.textContent, prof: prof.textContent, lang: lang})
}

console.log(result);