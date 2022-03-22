import Storage from "../OOP/src/Storage.js";
import Alert from "./src/Alert.js";



// get elements
const submit_form = document.getElementById('submit_form');
const msg = document.getElementById('msg');
const view_data_list = document.getElementById('view_data_list');

// add submit form for staff
submit_form.addEventListener('submit', function(e){
e.preventDefault();


let dataFile = new FormData(e.target);
let data = Object.fromEntries(dataFile.entries());

let {name, phone, location, photo} = data;
if( name == '' || phone == '' || location == '' ){

    msg.innerHTML = Alert.danger('All fields are required ?')
}else{

    Storage.set('devs' , data);
    submit_form.reset();
    data_view();
}

})

// function  for instant add data to dom

data_view();
function data_view (){
 let data = Storage.get('devs');

 let list1= '';
 data.map((data, index) =>{

    let {name, phone, location, photo, gender} = data;

    let imagee;

    if(photo == '' && gender == 'male'){
        imagee = './assets/image/images.png'
    }else if ( photo == '' && gender == 'female'){
        imagee = './assets/image/avatar-woman.png'
    }else{
        imagee = photo;
    }

    list1  += `
    <tr>
    <td>${ index + 1}</td>
    <td>${ name }</td>
    <td>${ phone }</td>
    <td>${ location }</td>
    <td>${ gender }</td>
    <td><img style="height: 40px; width: 40px; object-fit: cover; border-radius: 50%;" src="${ imagee }" alt=""></td>
    <td>
    <button class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
    <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i></button>
    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>

    </td>
</tr>
    `
 })
 view_data_list.innerHTML = list1;
}

