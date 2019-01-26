(function () {
    $("#addPage").hide();
    $("#deletePage").hide();
    $("#updatePage").hide();
    $("#verifyPage").hide();
    $("#viewPage").hide();
})();

const showView = function () {
    $("section").hide();
    $("#viewPage").show();
};

const showAdd = function () {
    $("section").hide();
    $("#addPage").show();
};

const showVerify = function () {
    $("section").hide();
    $("#verifyPage").show();
};

const showUpdate = function () {
    $("section").hide();
    $("#updatePage").show();
};

const showDelete = function () {
    $("section").hide();
    $("#deletePage").show();
};

$("#view").on("click", showView);
$("#add").on("click", showAdd);
$("#verify").on("click", showVerify);
$("#update").on("click", showUpdate);
$("#delete").on("click", showDelete);



const render = function () {
    $('#content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('#content').append(`<p>${employeeList[i].name}</p>`);
        $('#content').append(`<p>${employeeList[i].officeNum}</p>`);
        $('#content').append(`<p>${employeeList[i].phoneNum}</p>`);
    }
    //console.log(employeeList[i]);
};
//render();


//View function
const viewFunc = function (event) {
    event.preventDefault();
    render();
};
$('#view').on('click', viewFunc);



//add function

const addFunc = function (event) {
    event.preventDefault();
    const myName = $('#name').val();
    const myOfficeNum = $('#number').val();
    const myPhoneNum = $('#phone_number').val();

        employeeList.push(myName);
        employeeList.push(myOfficeNum);
        employeeList.push(myPhoneNum);
       
    $('#name').val('');
    $('#number').val('');
    $('#phone_number').val('');

    render();
};
$('#addItem').on('click', addFunc);



//delete function
const deleteFunc = function (event) {
    event.preventDefault();
    const userName = $('#name').val();
    employeeList.splice(employeeList.indexOf(userName), 1);

    $('#name').val('');
    render();
};
$('#deleteItem').on('click', deleteFunc);



//update function
const updateFunc = function () {
    event.preventDefault();

    const myOldName = $('#name').val();
    const myNewName = $('#newName').val();
    //const newNumber = $('#number').val();
    //const newPhoneNum = $('#phone_Number').val();

    const nameIndex = employeeList.indexOf(myOldName);

   if (nameIndex > -1) {
      employeeList.splice(nameIndex, 1, myNewName);
   }

    $('#name').val('');
    $('#newName').val('');
    render();
};
$('#updateItem').on('click', updateFunc);


//verify function

const verifyFunc = function (event) {
    event.preventDefault();

    const userName = $('#name').val();

    if (employeeList[i].name === userName) {
        //alert('yes');
        window.confirm('yes');
    }
    else {
        //alert('no');
        window.confirm('no')
    }
    $('#name').val();
    
    render();
};
$('#verifyItem').on('click', verifyFunc);