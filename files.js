const Form = document.querySelector('#form')
const Expenseamount = document.querySelector('#amount')
const Discription = document.querySelector('#discriptions')
const Categories = document.querySelector('#category')
const List = document.querySelector('#expense')

Form.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault();

    const dltbtn = document.createElement('button')
    dltbtn.appendChild(document.createTextNode("Delete"))
    dltbtn.value = "Delete"
    const editbtn = document.createElement('button')
    editbtn.appendChild(document.createTextNode("Edit"))
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(`${Expenseamount.value}  ${Discription.value} 
 ${Categories.value}`))
    li.appendChild(dltbtn)
    li.appendChild(editbtn)
    List.appendChild(li)
    editbtn.addEventListener('click', onpress)
    dltbtn.addEventListener('click', onclick)
    let obj = {
        Expenseamount: Expenseamount.value,
        Discription: Discription.value,
        Categories: Categories.value
    };
    let myobj = JSON.stringify(obj)
    localStorage.setItem(Categories.value, myobj);
    const dlt = Categories.value;
    const back = Discription.value;


    function onclick(e) {


        var li = e.target.parentElement;
        List.removeChild(li);

        localStorage.removeItem(dlt)
    }
    function onpress(e) {


        var li = e.target.parentElement;
        List.removeChild(li);
        Discription.value = back
        Categories.value = dlt
        localStorage.removeItem(dlt)
    }
}