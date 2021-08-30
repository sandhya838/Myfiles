const contact= `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact
    </title>
    <link rel="stylesheet" href="./contact.css">
</head>
<body>
    <div class="contact-in">
        <div class="contact-form">
            <h1><u>Contact Us</u></h1>
            <form>
                <label>Name:<input type="text" placeholder="Enter Full Name" class="contact-form-txt" /></label><br>
                <label>Email:<input type="text" placeholder="Enter Your Email" class="contact-form-txt" /></label><br>
                <label>Subject:<input type="text" placeholder="Enter Subject" class="contact-form-txt" /></label>
                <textarea placeholder="Message" class="contact-form-txtarea"></textarea>
            </form>
        </div>
        <div class="contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30243.556264071412!2d73.76274736522782!3d18.644037689566854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c02954e8cb%3A0x525d708de1d526f2!2sAkurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627092732968!5m2!1sen!2sin"
                width="580" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="captcha">
            <div class="spinner">
                <label>
                    <input type="checkbox" onclick="$(this).attr('disabled','disabled');">
                    <span class="checkmark"><span>&nbsp;</span></span>
                </label>
            </div>
            <div class="text">
                I'm not a robot
            </div>
            <div class="logo">
                <img src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/" />
                <p>reCAPTCHA</p>
                <small>Privacy - Terms</small>
            </div>
        </div><br> <br>
    
    </div>
    <button class="button">Send</button>
    <div class="container">
        <div class="card">
            <div class="card-container">
            <a>
                <h1><u>Corporate Office</u></h1>
            </a><br><br>
            <h2><b>Sunyukt Electrosolar & IT solutions Pvt. Ltd.</b></h2>
            <p>N. D. Tower, B-301, CTS 170, Dnyaneshwar Nagar,
                Akurdi, Pune-411035, Maharashtra, India
            </p>
            <i class="fa fa-phone" aria-hidden="true">&nbsp;
                <strong>+91 9689447169</strong>&nbsp;
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a href="mailto:sales@sunyukt.com" target="_blank"
                    rel="noopener">&nbsp;
                    sunilshewale@<wbr>sunyukt.com</a></i>
        </div></div>
        <div class="card">
            <div class="card-container">
            <a>
                <h1><u>Branch Office</u></h1>
            </a><br><br>
            <h2><b>Sunyukt Electrosolar & IT solutions Pvt. Ltd.</b></h2>
            <p>B-243, 2nd Floor, Jai Ganesh Vision, Near Inox
                Theater, Akurdi,Pune-411035, Maharashtra, India
            </p>
            <i class="fa fa-phone" aria-hidden="true">&nbsp;
                <strong>+91 9689447169</strong>&nbsp;
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a href="mailto:sales@sunyukt.com" target="_blank"
                    rel="noopener">&nbsp;sunilshewale@<wbr>sunyukt.com</a></i>
        </div></div>
    </div>
    </div>
  
</body>
</html>`