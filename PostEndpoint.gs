const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);

    // Get all existing serial numbers from column A (excluding the header)
    const serials = sheet.getRange("A2:A" + sheet.getLastRow()).getValues().flat();

    // Filter out non-numeric or empty cells
    const maxSerial = Math.max(0, ...serials.filter(val => typeof val === 'number'));

    const nextSerial = maxSerial + 1;

    const row = [
      nextSerial, // Serial Number (Column A)
      data.parentName,
      data.childName,
      data.email,
      data.phone,
      data.ageGroup,
      data.preferredSport,
      data.location,
      data.distance,
      new Date() //  Received At
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Data saved successfully',
        
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
