const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('🧾 SheetMan')
    .addItem('Run Test', 'doTest')
    .addSeparator()
    .addItem('About', 'onAbout')
    .addToUi();
};

const onAbout = () => {
  const ui = SpreadsheetApp.getUi();
  ui.alert('Copyright © 2021 Jooy2 Released under the MIT license.');
};
