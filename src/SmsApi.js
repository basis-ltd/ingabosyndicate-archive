import twilio from 'twilio';

const accountSid = 'AC6012408cb23768c2c55ab18884f4cf40';
const authToken = '362284407affcabba6261f0c976e3ee0';

const twiliosms = twilio(accountSid, authToken);


function sendMessage() {
    
        
    const sendsms = () => {
        twiliosms.messages
        .create({
            from: '+16294683116',
            to: '+250788478652',
            body: 'Message from Node'
        })
        .then((res) => console.log("Message delivered successfully"))
        .catch((err) => console.log(err));

    }
    
    
    return (

        <div>
            <button onClick={sendsms}>Send Message</button>
        </div>

    )

}

export default sendMessage;

    