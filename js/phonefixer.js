function startfixer() {
  var numaralar = document.getElementById("PhoneTextArea").value;
  //numaralar = numaralar.replace(/[^a-zA-Z0-9]/g, '');
  var numara = numaralar.split(" ");
  numara = numara.filter(Boolean);

  var filename = document.getElementById("NameTextArea").value;
  var filenumber = document.getElementById("NumberTextArea").value;
  var firstnumber = filenumber;
  var counter = filenumber;

      for (i = 0; i <= numara.length - 1; i++){
          if (numara[i].indexOf('9005')) {
            numara[i] = numara[i].replace('9005', '905');

          }

          if (numara[i].startsWith('9005')) {
            numara[i] = numara[i].replace('9005', '905');

          }

          if (numara[i].startsWith('+')) {
            numara[i] = numara[i].replace('+', '');

          }

          if (numara[i].startsWith('(')) {
            numara[i] = numara[i].replace('(', '');

            }

            if (numara[i].indexOf(')')) {
              numara[i] = numara[i].replace(')', '');
  
              }

              if (numara[i].indexOf('-')) {
                numara[i] = numara[i].replace('-', '');
    
                }

          if (numara[i].startsWith('5')) {
            numara[i] = numara[i].replace('5', '905');

            }
         
          if (numara[i].length > 15) {
            numara[i] = numara[i].slice(0, 12);
          }

          if (numara[i].length < 12) {
            numara[i] = "";
          }
        }

      numara = numara.filter(Boolean);

      for (i = 0; i <= numara.length - 1; i++){

          numara[i] = "+" + numara[i];

      }



      for (i = 0; i <= numara.length - 1; i++){
        
        if (numara[i].length < 13) {
          numara[i] = "";
        }
      
        // Find a <table> element with id="NumberListTable":
        var table = document.getElementById("NumberListTable");

        // Create an empty <tr> element and add it to the 2nd position of the table:
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        row.className += " table-info";
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = filename + counter++;
        cell2.innerHTML = numara[i];

      }

      CreateVcard(filename, filenumber, numara);


}

  function CreateVcard(filename, filenumber, numara) {
    
    firstnumber = filenumber;

    for (i = 0; i <= numara.length - 1; i++){

      filenumber++;
      numara[i] = "BEGIN:VCARD\nVERSION:3.0\nFN:" + filename + filenumber + "\nN:;" + filename + "000" + filenumber + ";;;\nitem1.TEL:" + numara[i] + "\nitem1.X-ABLabel:\nEND:VCARD\n";

    }

    numara = numara.join("");

    filename = filename + firstnumber + "-" + filename + filenumber;

    download(filename, numara);
  }


  function download(filename, numara) {
    var element = document.getElementById("downloadbutton");
    element.setAttribute('href', 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(numara));
    element.setAttribute('download', filename);
  
    //element.style.display = 'none';
    //document.body.appendChild(element);
  
    //element.click();
  
    //document.body.removeChild(element);
  }
  