function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        console.log(btoa(reader.file));
        preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
function getBase64(file) {
var reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function () {
    console.log(reader.result);
};
reader.onerror = function (error) {
    console.log('Error: ', error);
};
}

var file = document.querySelector('input[type=file]').files[0];
getBase64(file); // prints the base64 string

$('#form-id').submit(function( event ) {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    // alert(file);
    console.log();
    var DATA = {
        image64: reader.readAsBinaryString(file),
        imageId: 3,
        data: file
    };
    console.log(DATA);
    $.ajax({
        type: "POST",
        url: "/",
        data: file,
        success: JSON.stringify(DATA)
    });

    // reader.onload = function() {
        
    //     btoa(reader.result);
    // };

    // console.log($(file).val());
    event.preventDefault();
  });

