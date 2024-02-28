var SourceFolder = DriveApp.getFolderById("1rzboHRKHPQnnb_1vu2kUvZHWfu3Oy15N")
var num = 0;
var tipos = ["application/pdf", "application/vnd.google-apps.document", "application/vnd.google-apps.spreadsheet",
             "application/vnd.google-apps.presentation", "application/vnd.google-apps.form", 
             "video/mp4", "image/png", "image/jpeg"]

function FileRenaming() { 
  var Files = SourceFolder.getFiles();
  while(Files.hasNext()) {
    var file = Files.next();

    if (file.getMimeType() == tipos[0]) {
      num = num+1;
      file.setName("PDF " + num)
    }

    else if (file.getMimeType() == tipos[1]) {
      num = num+1;
      file.setName("Documento " + num)
    }

    else if (file.getMimeType() == tipos[2]) {
      num = num+1;
      file.setName("Hoja de Cálculo " + num)
    }

    else if (file.getMimeType() == tipos[3]) {
      num = num+1;
      file.setName("Presentación " + num)
    }

    else if (file.getMimeType() == tipos[4]) {
      num = num+1;
      file.setName("Formulario " + num)
    }

    else if (file.getMimeType() == tipos[5]) {
      num = num+1;
      file.setName("Video " + num)
    }

    else if (file.getMimeType() == tipos[1] || tipos[2]) {
      num = num+1;
      file.setName("Imagen " + num)
    }
 
    // Funcion para poder obtener la extensión del archivo
       // ---> console.log(file.getMimeType());
}
}
