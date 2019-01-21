( function(){
    $('#addPage').hide();
    $('#deletePage').hide();
    $('#updatePage').hide();
    $('#verifyPage').hide();
   
})();

const showView = function(){
    $('section').hide();
    $('#viewPage').show();
};

const showAdd = function(){
    $('section').hide();
    $('#addPage').show();
};

const showVerify = function(){
    $('section').hide();
    $('#verifyPage').show();
};

const showUpdate = function(){
    $('section').hide();
    $('#updatePage').show();
};

const showDelete = function(){
    $('section').hide();
    $('#deletePage').show();
};

$('#view').on('click', showView);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);

