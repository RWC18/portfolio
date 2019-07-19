import React, {useState} from 'react';

import classes from './Contact.module.scss';

const Contact = () => {
    document.title = "Contact | Vahe Minasyan";

    const cnt = [
        <p><i className="fas fa-map-marker-alt"> </i> Sport str. 12, Yerevan, Armenia</p>,
        <p><i className="fas fa-mobile-alt"> </i> +374-94-223-323</p>,
        <p><i className="fas fa-envelope"> </i> <a href="mailto:vahe.minasyan.2000.at@gmail.com">vahe.minasyan.2000.at@gmail.com</a></p>,
    ];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [comment, setComment] = useState('');



    const sendFunc = (event) => {
        event.preventDefault();



        debugger;
    };

    return (
        <div className={classes.Contact}>
            <h3>My Contact</h3>
            <h1>Contact Me</h1>

            <div className={classes.flex}>
                <div className={classes.leftSide}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.5705793496772!2d44.45851468350382!3d40.19481713122048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd830a98028f%3A0x2d280a8263a3c1fa!2zMTIgU3BvcnQgU3QsIFllcmV2YW4sINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1562656380738!5m2!1sru!2s"
                        frameBorder="0" allowFullScreen> </iframe>
                </div>
                <div className={classes.rightSide}>
                    <h4>Contact with me</h4>
                    <hr/>
                    <div className={classes.cnt}>
                        {
                            cnt.map((cnt) => cnt)
                        }
                    </div>
                    <form className={classes.inputs}>
                        <input
                            type="text"
                            placeholder="Name" defaultValue={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email" defaultValue={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Phone" defaultValue={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <textarea
                            placeholder="Comment"
                            defaultValue={comment}
                            onChange={e => setComment(e.target.value)}
                        ></textarea>

                        <div className={classes.send}>
                            <button onClick={(event) => sendFunc(event)}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;