const node_mailer = require("../config/node_mailer");



exports.newComment=(comment) =>{
    let htmlString = node_mailer.renderTemplate({comment:comment},'/comments/new_comment.ejs')


node_mailer.transporter.sendMail({
    from: '"Mohd Jubair" <jubairk852@gmail.com>', // sender address
    to: comment.user.email,
    subject: "Hello ✔", // Subject line
    html: htmlString, // html body
  });
}