document.addEventListener("DOMContentLoaded", function() {
    QRCode.toCanvas(document.getElementById('qrcode'), 'https://wa.me/22898935845', {
      width: 150,
      color: {
        dark: '#fff',   // bleu
        light: '#134dca45'   // fond blanc
      },
      errorCorrectionLevel: 'H'
    }, function (error) {
      if (error) console.error(error);
      console.log('QR code généré !');
    });
})