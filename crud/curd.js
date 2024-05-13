let data = []

function readAll () {
    localStorage.setItem("object", JSON.stringify(data));
    var data_table = document.querySelector(".data_table");

    var object = localStorage.getItem('object')
    var objectData = JSON.parse(object);
    var elements = "";

    objectData.map(record => (
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button>Edit</button>
        <button>Delete</button>
        </td>
            `
    ))


    data_table.innerHTML = elements
}

function create() {
    document.querySelector(".create_form").style.display = "block"
    document.querySelector(".add_div").style.display = "none"
}

function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {id: 3, name: name, email:email};
    data.push(newObj)
    readAll();
    
    document.querySelector(".create_form").style.display = "none"
    document.querySelector(".add_div").style.display = "block"

}