function doGet(e) {
  const domain = GetDomain();

  // Return plain text
  return ContentService
    .createTextOutput(domain)
    .setMimeType(ContentService.MimeType.TEXT);
}

function GetDomain(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Domains");
  if (!sheet) {
    return ContentService.createTextOutput("Sheet 'Domains' not found");
  }
  const domain = sheet.getRange(2, 1).getValue().toString();
  return domain;
}