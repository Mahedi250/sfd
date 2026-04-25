// Google Apps Script — paste into Extensions > Apps Script in your Google Sheet
// Deploy: Deploy > New deployment > Web app
//   Execute as: Me
//   Who has access: Anyone
// Copy the web app URL into .env.local as GOOGLE_SCRIPT_URL

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers on first row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Name", "Phone", "Service", "Date", "Time", "Notes"
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),
      data.name    || "",
      data.phone   || "",
      data.service || "",
      data.date    || "",
      data.time    || "",
      data.notes   || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
