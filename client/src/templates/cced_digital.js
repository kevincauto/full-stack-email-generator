import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();

// const bannerSrc = fields[3].value;
// let coverSrc = fields[4].value;
// const note;
// let link = fields[5].value;

//Establish every type of form, the attributes of the form, and all the fields within it.
export const cced_digital_forms = {
    beginning: {
        typeOfRow: 'beginning',
        header: 'Beginning Section',
        closable: false,
        switchable: false,
        addable: true,
        draggable: false,
        fields: [
            {
                label: 'Month', name: 'month', value: currentMonth,
                dropdown: [
                    { value: '01', text: 'Send Month: January' },
                    { value: '02', text: 'Send Month: February' },
                    { value: '03', text: 'Send Month: March' },
                    { value: '04', text: 'Send Month: April' },
                    { value: '05', text: 'Send Month: May' },
                    { value: '06', text: 'Send Month: June' },
                    { value: '07', text: 'Send Month: July' },
                    { value: '08', text: 'Send Month: August' },
                    { value: '09', text: 'Send Month: September' },
                    { value: '10', text: 'Send Month: October' },
                    { value: '11', text: 'Send Month: November' },
                    { value: '12', text: 'Send Month: December' },
                ]
            },
            {
                label: 'Year', name: 'year', value: currentYear, dropdown: [

                    { value: '2018', text: 'Send Year: 2018' },
                    { value: '2019', text: 'Send Year: 2019' },
                    { value: '2020', text: 'Send Year: 2020' },
                    { value: '2021', text: 'Send Year: 2021' },
                    { value: '2022', text: 'Send Year: 2022' }
                ]
            },
            { label: 'Banner Image Source Link', name: 'bannerSrc', value: 'https://placehold.it/600x140' },
            { label: 'Cover Image Source', name: 'coverSrc', value: 'https://placehold.it/180x220' },
            { label: 'Editors Note', name: 'note', value: 'Lorem ipsum dolar emet arma vi vincre kano troi ai me primus abores.' },
            { label: 'Digimag Link', name: 'link' },
        ]
    },
    ce_article: {
        typeOfRow: 'ce_article',
        header: 'CE Article',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title', value: 'Title' },
            { label: 'Description', name: 'description' },
            { label: 'Author', name: 'author' },
            { label: 'Link', name: 'link' }
        ]
    },
    article: {
        typeOfRow: 'article',
        header: 'Article',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title', value: 'Title' },
            { label: 'Description', name: 'description', value: '' },
            { label: 'Author', name: 'author' },
            { label: 'Link', name: 'link' }
        ]
    },
    dotted_line: {
        typeOfRow: 'dotted_line',
        header: 'Dotted Line Divider',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: []
    },
    section_header: {
        typeOfRow: 'section_header',
        header: 'Section Header',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header Text', name: 'text', value: 'Also in This Issue:' },
        ]
    },
    end: {
        typeOfRow: 'end',
        header: 'End of the Email',
        closable: false,
        switchable: false,
        addable: false,
        draggable: false,
        fields: [
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.' },
            {
                label: 'Month', name: 'month', value: currentMonth,
                dropdown: [
                    { value: '01', text: 'Send Month: January' },
                    { value: '02', text: 'Send Month: February' },
                    { value: '03', text: 'Send Month: March' },
                    { value: '04', text: 'Send Month: April' },
                    { value: '05', text: 'Send Month: May' },
                    { value: '06', text: 'Send Month: June' },
                    { value: '07', text: 'Send Month: July' },
                    { value: '08', text: 'Send Month: August' },
                    { value: '09', text: 'Send Month: September' },
                    { value: '10', text: 'Send Month: October' },
                    { value: '11', text: 'Send Month: November' },
                    { value: '12', text: 'Send Month: December' },
                ]
            },
            {
                label: 'Year', name: 'year', value: currentYear,
                dropdown: [
                    { value: '2017', text: 'Send Year: 2017' },
                    { value: '2018', text: 'Send Year: 2018' },
                    { value: '2019', text: 'Send Year: 2019' },
                    { value: '2020', text: 'Send Year: 2020' },
                    { value: '2021', text: 'Send Year: 2021' },
                    { value: '2022', text: 'Send Year: 2022' }
                ]
            },
            { label: 'Subscribe Link', name: 'subscribe' },
        ]
    }
}

//create a base layout.  (Be sure to include at least one of each form.)
export const cced_digital_initial_state = [
    _.cloneDeep(cced_digital_forms.beginning),
    _.cloneDeep(cced_digital_forms.ce_article),
    _.cloneDeep(cced_digital_forms.ce_article),
    _.cloneDeep(cced_digital_forms.dotted_line),
    _.cloneDeep(cced_digital_forms.section_header),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.dotted_line),
    _.cloneDeep(cced_digital_forms.end)
];

//Several functions to generate the html sections of the email
export function beginning(fields) {
    const month = fields[0].value;
    const year = fields[1].value;
    const bannerSrc = fields[2].value;
    const coverSrc = fields[3].value;
    const note = fields[4].value;
    const link = fields[5].value;

    let monthName;
    if (month === '01') { monthName = 'January' };
    if (month === '02') { monthName = 'February' };
    if (month === '03') { monthName = 'March' };
    if (month === '04') { monthName = 'April' };
    if (month === '05') { monthName = 'May' };
    if (month === '06') { monthName = 'June' };
    if (month === '07') { monthName = 'July' };
    if (month === '08') { monthName = 'August' };
    if (month === '09') { monthName = 'September' };
    if (month === '10') { monthName = 'October' };
    if (month === '11') { monthName = 'November' };
    if (month === '12') { monthName = 'December' };
    return (`
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Your ${monthName} Digital Edition Is Now Available</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width" name="viewport" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <style type="text/css">
          #outlook a {
          padding: 0;
          }
          .ReadMsgBody {
          width: 100%;
          }
          .ExternalClass {
          width: 100%;
          }
          .ExternalClass, .ExternalClass span, .ExternalClass td, .ExternalClass div {
          line-height: 100%;
          }
          body, table, td, a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          }
          table, td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          }
          img {
          -ms-interpolation-mode: bicubic;
          }
          body {
          height: 100% !important;
          margin: 0;
          padding: 0;
          width: 100% !important;
          }
          img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          }
          /* LINK STYLES */
          .white a, .white a:link, .white a:active, .white a:visited {
          color: #FFFFFF !important;
          text-decoration: none !important;
          }
          .black a, .black a:link, .black a:active, .black a:visited {
          color: #000000 !important;
          text-decoration: none !important;
          }
          .grey a, .grey a:link, .grey a:active, .grey a:visited {
          color: #6d6f72 !important;
          text-decoration: none !important;
          }
          .maroon a, .maroon a:link, .maroon a:active, .maroon a:visited {
          color: #ab1117 !important;
          text-decoration: none !important;
          }
          .link-hover:hover {
          text-decoration: none !important;
          }
          @media screen and (max-width: 600px), screen and (max-device-width: 600px) {
          body {
          width: 100% !important;
          height: auto !important;
          }
          table.w600 {
          width: 100% !important;
          height: auto !important;
          min-width: 100% !important;
          }
          table.w100, td.w100, img.w100 {
          width: 100% !important;
          height: auto !important;
          }
          .w28 {
          width: 15px !important;
          height: auto !important;
          }
          .pad {
          padding: 0px 3px !important;
          }
          .padT {
          padding-top: 0px !important;
          }
          .padL {
          padding-left: 10px !important;
          }
          .f16 {
          font-size: 14px !important;
          line-height: 18px !important;
          }
          .f14 {
          font-size: 9px !important;
          line-height: 18px !important;
          }
          .hide {
          display: none!important;
          }}		
        </style>
        <!--[if gte mso 9]>
        <style type="text/css">
          body, p, a, span, td, table {
          font-family:Arial, Helvetica, sans-serif !important;
          }
        </style>
        <![endif]-->	
      </head>
      <body bgcolor="#FFFFFF" data-gramm="true" data-gramm_id="88446c0a-b678-ac55-833b-518e0b69e3df">
        <!--g link-->		
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td width="5">
              </td>
              <td align="center">
                <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" height="20">
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <table border="0" cellpadding="0" cellspacing="0" class="w600" style="min-width:600px;" width="600">
                          <tbody>
                            <tr>
                              <td align="center" bgcolor="#151F4A" height="30" style="font-family:Arial, sans-serif; font-size:10px; color:#ffffff; text-align:center;  ">
                                Having trouble viewing this email? <a href="https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter/digital" style="color:#fff;" target="_blank">Click here</a>.
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2018/02/dash.jpg" style="display:block; margin:0px; max-width:600px;" width="600" />
                              </td>
                            </tr>
                            <tr>
                              <td align="center" height="25">
                              </td>
                            </tr>
                            <tr>
                              <td align="center" class="padL">
                                <a href="https://www.aegisdentalnetwork.com/cced/" target="_blank"><img alt="" src="http://www.dentalaegis.com/img/layout/general/cced-logo-large.png" style="display:block; margin:0px; max-width:300px;" width="300" /></a>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" height="25">
                              </td>
                            </tr>
                            <tr>
                              <td align="center" bgcolor="#87764E" colspan="2" height="40" style="font-family:Arial, sans-serif; font-size:16px; color:#fff; text-align:center; text-decoration:none; color: #fff; padding: 0px 0px;">
                                THIS MONTH&#39;S DIGITAL ISSUE
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding-bottom: 10px;" valign="top">
                                <img alt="" class="w100" height="175" src="${bannerSrc}" width="600" />
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td dir="rtl" style="text-align:center;vertical-align:top;font-size:0; direction:rtl;" valign="top">
                                        <!--[if (gte mso 9)|(IE)]>
                                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;border-collapse:collapse;" >
                                          <tr>
                                            <td align="left" valign="top">
                                              <![endif]-->																		
                                              <div style="width:100%;max-width:207px;display:inline-block;vertical-align:top;text-align:center;">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center" dir="ltr" style="direction:ltr;">
                                                        <table border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" style=" padding-top:0px; padding-bottom: 5px;">
                                                                <a href="${link}" target="_blank"><img alt="" src="${coverSrc}" style="display:block; margin:0px; max-width:190px;" width="190" /></a>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center">
                                                                <table bgcolor="#151F4A" border="0" cellpadding="0" cellspacing="0" style="border-radius:4px;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" class="white" height="40" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:30px; padding:0px 40px; color:#ffffff;">
                                                                        <a href="${link}" style="color:#ffffff; text-decoration:none;" target="_blank">READ ISSUE</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" height="25">
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td width="15">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              <!--[if (gte mso 9)|(IE)]>
                                            </td>
                                            <td align="left" valign="top">
                                              <![endif]-->																		
                                              <div style="width:100%;max-width:390px;display:inline-block;vertical-align:top;text-align:center;">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center" class="pad">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" bgcolor="#87764E" height="40" style="font-family:Arial, sans-serif; font-size:16px; color:#ffffff; text-align:center; padding: 0px 10px;">
                                                                EDITOR&#39;S NOTE
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" height="10">
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; text-align:left; padding: 10px 10px 4px 0px;">
                                                                <div>
                                                                  ${note}&lrm;
                                                                </div>
                                                                <br />
                                                                <em>Louis F. Rose, DDS, MD<br />
                                                                Editor-In-Chief<br />
                                                                </em> <img src="https://www.dentalaegis.com/media/63612/" width="150" />
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" height="15">
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              <!--[if (gte mso 9)|(IE)]>
                                            </td>
                                          </tr>
                                        </table>
                                        <![endif]-->																	
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding-bottom:14px;">
                                <img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" style="display:block; margin:0px; max-width:600px;" width="600" />
                              </td>
                            </tr>			  	  
                            <tr>
                              <td align="center" class="pad">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="#87764E" height="40" style="font-family:Arial, sans-serif; font-size:16px; color:#ffffff; text-align:center; text-decoration:none; color: #ffffff; text-transform:uppercase;">
                                        Featured ${monthName} Content
                                      </td>
                                    </tr>
      <!--END OF BEGINNING SECTION-->	
  `)
}

export function ce_article(fields) {
    let title = fields[0].value;
    const description = fields[1].value;
    let author = fields[2].value;
    let link = fields[3].value;
    return (
        `<!--CE ARTICLE BEGINS-->
        <tr>
          <td align="center" style="padding-top:10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td width="47">
                    <img src="https://www.dentalaegis.com/media/63911/" width="45" />
                  </td>
                  <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; line-height:20px; font-weight:bold;">
                    <a href="${link}" style="text-decoration:none; color:#4c4c4c; vertical-align: top" target="_blank">${title}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <!--    <tr>
          <td height="15" align="center" style="height:15px; line-height:1px; font-size:1px;"></td>
          
          </tr>-->																
        <tr>
          <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; line-height:18px;">
            ${description ? `${description}<br />` : ``}
            ${author ? `<em>${author}</em>` : ``}
          </td>
        </tr>
        <tr>
          <td align="left" style="font-family:Arial, sans-serif; color:#d99316; font-size:14px; line-height:20px; font-weight:bold;">
            <a href="${link}" style="text-decoration:none; color:#87764E; font-size:14px;" target="_blank">READ MORE</a>
          </td>
        </tr>
        <tr>
          <td align="center" height="20">
          </td>
        </tr>
<!--CE ARTICLE ENDS-->`
    )
}

export function article(fields) {
    let title = fields[0].value;
    const description = fields[1].value;
    let author = fields[2].value;
    let link = fields[3].value;
    return (
        `<!--REGULAR ARTICLE-->
        <tr>
          <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; line-height:20px; font-weight:bold;">
            <a href="${link}" style="text-decoration:none; color:#4c4c4c; vertical-align: top" target="_blank">${title}</a>
          </td>
        </tr>
        <tr>
          <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; line-height:18px;">
          ${description ? `${description}<br />` : ``}
          ${author ? `<em>${author}</em>` : ``}  
          </td>
        </tr>
        <tr>
          <td align="left" style="font-family:Arial, sans-serif; color:#d99316; font-size:14px; line-height:20px; font-weight:bold;">
            <a href="${link}" style="text-decoration:none; color:#87764E; font-size:14px;" target="_blank">READ MORE</a>
          </td>
        </tr>
        <tr>
          <td align="center" height="20">
          </td>
        </tr>
        <!--END REGULAR ARTICLE-->`
    )
}

export function dotted_line() {
    return (`
    <!--DOTTED LINE DIVIDER-->
    <tr>
      <td align="center">
        <img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" style="display:block; margin:0px; max-width:600px;" width="600" />
      </td>
    </tr>
    <tr>
      <td align="center" height="15">
      </td>
    </tr>
<!--END DOTTED LINE DIVIDER-->
`)
}

export function section_header(fields) {
    const text = fields[0].value;
    return (`
    <!--HEADLINE-->
                                <tr>
                                  <td align="center">
                                    <div style="font-family:Arial, sans-serif; color:#87764E; font-size:19px; font-weight:bold; text-align:left; margin:0 0 7px 0;">
                                      ${text}
                                    </div>
                                  </td>
                                </tr>
    <!--END HEADLINE-->
    `)
}


export function end(fields) {
    let description = fields[0].value;
    let month = fields[1].value;
    let year = fields[2].value;
    let subscribe = fields[3].value;
    let monthName;
    if (month === '01') { monthName = 'January' };
    if (month === '02') { monthName = 'February' };
    if (month === '03') { monthName = 'March' };
    if (month === '04') { monthName = 'April' };
    if (month === '05') { monthName = 'May' };
    if (month === '06') { monthName = 'June' };
    if (month === '07') { monthName = 'July' };
    if (month === '08') { monthName = 'August' };
    if (month === '09') { monthName = 'September' };
    if (month === '10') { monthName = 'October' };
    if (month === '11') { monthName = 'November' };
    if (month === '12') { monthName = 'December' };
    return (`
    <!--BEGINNING OF THE END SECTION -->
    <tr>
      <td align="center" height="10">
      </td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; line-height:18px; font-weight:bold;">
        <a href="https://www.aegisdentalnetwork.com/cced/${year}/${month}/" style="text-decoration: none; font-weight:bold; color: #4c4c4c;" target="_blank">${description}</a>
      </td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, sans-serif; color:#d99316; font-size:14px; line-height:20px; font-weight:bold;">
        <a href="https://www.aegisdentalnetwork.com/cced/${year}/${month}/" style="text-decoration:none; color:#87764E; text-align:left; font-weight:bold;" target="_blank">READ MORE</a>
      </td>
    </tr>
    <tr>
      <td align="center" height="25">
      </td>
    </tr>
    <tr>
      <td align="center" style="padding-bottom:14px;">
        <img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" style="display:block; margin:0px; max-width:600px;" width="600" />
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#87764E" height="40" style="font-family:Arial, sans-serif; font-size:16px; color:#ffffff; text-align:center; text-decoration:none; color: #ffffff; text-transform:uppercase;">
        Connect with Compendium
      </td>
    </tr>
  </tbody>
</table>
</td>
</tr>
<tr>
<td align="center" height="20">
</td>
</tr>
<tr>
<td align="center">
<table border="0" cellpadding="0" cellspacing="0">
  <tbody>
    <tr>
      <td align="center" width="32">
        <a href="https://www.facebook.com/CompendiumDentistry" target="_blank"> <img alt="" border="0" src="https://www.aegisdentalnetwork.com/media/66989/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
      </td>
      <td width="23">
      </td>
      <td align="center" width="32">
        <a href="https://twitter.com/compendiumced" target="_blank"> <img alt="" border="0" src="https://www.aegisdentalnetwork.com/media/66987/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
      </td>
      <td width="23">
      </td>
      <td align="center" width="31">
        <a href="mailto:?subject=FW: ${monthName} ${year} Issue Available Now&body=I thought you might be interested in this: https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter/digital" target="_blank"> <img alt="" border="0" src="https://www.aegisdentalnetwork.com/media/66988/" style="display:block; margin:0px; max-width:31px;" width="31" /> </a>
      </td>
      <td align="center" width="23">
      </td>
      <td align="center" width="21">
        <a href="${subscribe}" target="_blank"><img alt="" height="32" src="http://aegispublications.com/news/cced/2018/05/subscribe.png" width="32" /></a>
      </td>
    </tr>
  </tbody>
</table>
</td>
</tr>
<tr>
<td align="center" height="20">
</td>
</tr>
<tr>
<td align="center">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody>
    <tr>
      <td align="center">
        <table align="left" border="0" cellpadding="0" cellspacing="0" class="220" width="300">
          <tbody>
            <tr>
              <td align="center">
                <img src="https://www.dentalaegis.com/media/63610/" style="clear:both; width: 300px;" width="300" />
              </td>
            </tr>
            <tr>
              <td align="center" height="15" style="height:15px; line-height:1px; font-size:1px;">
              </td>
            </tr>
          </tbody>
        </table>
        <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="220">
          <tbody>
            <tr>
              <td align="center">
                <a href="https://www.aegisdentalnetwork.com/cced/" target="_blank"> <img src="https://www.dentalaegis.com/media/63611/" width="220" /></a>
              </td>
            </tr>
            <tr>
              <td align="center" height="15" style="height:15px; line-height:1px; font-size:1px;">
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</td>
</tr>
<tr>
<td align="center" height="20" style=" border-top:1px solid #333333;">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" style="color:#666 !important; text-decoration:none;" target="_blank">AEGIS Dental Network</a> | <em>Compendium</em>.<br />
To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book.<br />
%%PLUGIN_UNSUBSCRIBE: 2036355-UNSUBSCRIBE%%<br />
<em>Compendium,</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" style="color:#666; text-decoration:none;" target="_blank">Privacy Policy</a><br />
</td>
</tr>
</tbody>
</table>
</td>
<td width="5">
</td>
</tr>
<tr>
<td align="center" height="20">
</td>
</tr>
</tbody>
</table>
</body>
</html>
  `)
}

