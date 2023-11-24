function doGet() {
  const htmlService = HtmlService.createTemplateFromFile("index")
  const html = htmlService.evaluate().addMetaTag("viewport","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
  return html
}


function acceptData(formData){
  console.log(formData)
 
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Sheet1")

  ws.appendRow([formData.serialNumber,formData.partNumber,formData.customer,formData.status,formData.notes,formData.checkboxtbc])

}
