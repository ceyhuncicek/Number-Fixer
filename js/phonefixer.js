


function NumberFixer() {
  let numbers = document.getElementById("PhoneTextArea").value.split('\n');

  // It deletes all characters except numbers
    for (i = 0; i <= numbers.length - 1; i++){
      numbers[i] = numbers[i].replace(/[^0-9]/gm, "");
  };
  

  // Filter empty arrays
  numbers = numbers.filter(Boolean);


  var filename = document.getElementById("NameTextArea").value;
  var filenumber = document.getElementById("NumberTextArea").value;
  var firstnumber = filenumber;
  var counter = filenumber;




  
// Custom filters. According to number data, patters are founded and applied.
      for (i = 0; i <= numbers.length - 1; i++){
          if (numbers[i].indexOf('9005')) {
            numbers[i] = numbers[i].replace('9005', '905');

          }

          if (numbers[i].startsWith('9005')) {
            numbers[i] = numbers[i].replace('9005', '905');

          }

          if (numbers[i].startsWith('5')) {
            numbers[i] = numbers[i].replace('5', '905');

            }
         
          if (numbers[i].length > 15) {
            numbers[i] = numbers[i].slice(0, 12);
          }

          if (numbers[i].length < 12) {
            numbers[i] = "";
          }
        }


    // Filter empty arrays
       numbers = numbers.filter(Boolean);
      
    // add + start of numbers.
        for (i = 0; i <= numbers.length - 1; i++){

          numbers[i] = "+" + numbers[i];

      }



      for (i = 0; i <= numbers.length - 1; i++){
      
        // Find a <table> element with id="NumberListTable":
        var table = document.getElementById("NumberListTable");

        // Create an empty <tr> element and add it to the 2nd position of the table:
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        row.className += " table-info";
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = filename + "000" + counter++;
        cell2.innerHTML = numbers[i];

      }

      CreateVcard(filename, filenumber, numbers);


}

  function CreateVcard(filename, filenumber, numbers) {
    
    firstnumber = filenumber;

    for (i = 0; i <= numbers.length - 1; i++){

      filenumber++;
      numbers[i] = "BEGIN:VCARD\nVERSION:3.0\nFN:" + filename + "000" + filenumber + "\nN:;" + filename + "000" + filenumber + ";;;\nitem1.TEL:" + numbers[i] + "\nitem1.X-ABLabel:\nEND:VCARD\n";

    }

    numbers = numbers.join("");

    filename = filename + "000" + firstnumber + "-" + filename + "000" + filenumber;

    download(filename, numbers);
  }


  function download(filename, numbers) {
    var element = document.getElementById("downloadbutton");
    element.setAttribute('href', 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(numbers));
    element.setAttribute('download', filename);
  
    //document.body.appendChild(element);
  
    //element.click();
  
    //document.body.removeChild(element);
  }
  