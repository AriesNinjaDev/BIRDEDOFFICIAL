const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');

// Email address that sends the emails
const fromHost = `birded.tech`;const from = 'verify' + '@' + fromHost;


function sendVerification(mailTo,userCode) {
  
  // Ask for email address
  const to = mailTo
  
  // Generate a random verification code
  const trueVerificationCode = userCode
  
  // Create the email transport
  const transport = nodemailer.createTransport(directTransport({
    name: fromHost
  }));
  
  
  // Send the email
  transport.sendMail({
    from, to,
    subject: 'Email Verification for Birded',
    html: `
           <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 620px) {
    .u-row {
      width: 600px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-100 {
      width: 600px !important;
    }
  
  }
  
  @media (max-width: 620px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: 100% !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  table,
  tr,
  td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  table, td { color: #ffffff; } #u_body a { color: #0000ee; text-decoration: underline; }
      </style>
    
    
  
  <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css"><!--<![endif]-->
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #0e1525;color: #ffffff">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #0e1525;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #0e1525;"><![endif]-->
      
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding-right: 0px;padding-left: 0px;" align="center">
        <a href="https://birded.tech/" target="_blank">
        <img align="center" border="0" src="https://cdn.discordapp.com/attachments/1038523709893398631/1079622923716927521/thumb-alt.png" alt="Birded Banner" title="Birded Banner" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;" width="580"/>
        </a>
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
          
    <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 36px; ">Verify Your Email</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
          
    <div>
      <card style="align-items: stretch;padding: 12px;position: relative;transition-property: border-color, box-shadow;transition-duration: .12s;transition-timing-function: ease-out;border-radius: 8px;background-color: #1C2333;border: 1px solid #2B3245;display: inline-block;color: white;">
              <p style="color: white;">Dear ${process.env.REPL_OWNER},</p>
              <p>‎</p>
              <p style="color: white;">It looks like you have requested to verify your email for Birded Online. If you did not ask for this email, please ignore it and delete this. If you did, DO NOT SHARE THIS CODE! Your Requested Code is:</p>
              <center>
                  <h1 style="font-size: 75px;">${trueVerificationCode}</h1>
              </center>
              <p>‎</p>
          </card>
    </div>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
          
    <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 140%;">Birded Official, © 2023. Part of Ninjam Studios.</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
  
          `
  }, (err, data) => {
    if (err) {
      console.error('There was an error:', err);
    } else {
      console.log('\nVerification email sent, check your inbox\n');
      const userVerificationCode = prompt('Enter your verification code ');
      if (userVerificationCode == trueVerificationCode) {
        console.log('Email address verified');
      } else {
        console.log('Code incorrect');
      }
    }
  });
  
}

module.exports = { sendVerification }