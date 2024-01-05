import '../css/Main.css';
import '../css/Contact.css';
import '../css/MediaQueries.css';


export const Contact = () => {

    return (
        <section id="Contact">
            <div className="contact_container">
                <div className="screen">

                    <div className="screen_header">

                        <div className="screen_header_left">
                            <div className="screen_header_button close"></div>
                            <div className="screen_header_button maximize"></div>
                            <div className="sscreen_header_button minimize"></div>
                        </div>

                        <div className="screen_header_right">
                            <div className="screen_header_ellipsis"></div>
                            <div className="screen_header_ellipsis"></div>
                            <div className="screen_header_ellipsis"></div>
                        </div>

                    </div>

                    <div class="screen_body">
                        <div className="screen_body_item left">

                            <div className="app_title">
                                <span>CONTACT ME</span>
                            </div>

                            <div className="app_contact">CONTACT INFO : +65 9740 6862</div>

                        </div>

                        <div className="screen_body_item">
                            <div className="app_form">
                                <form action="" method="POST">
                                    <div className="app_form_group">
                                        <input className="app_form_control" placeholder="NAME"/>
                                    </div>
                                    <div className="app_form_group">
                                        <input className="app_form_control" placeholder="EMAIL"/>
                                    </div>
                                    <div className="app_form_group">
                                        <input className="app_form_control" placeholder="CONTACT NO"/>
                                    </div>
                                    <div className="app_form_group message">
                                        <textarea className="app_form_control" placeholder="MESSAGE"/>
                                    </div>
                                    <div className="app_form_group buttons">
                                        <button className='app_form_button'>CANCEL</button>
                                        <button  className='app_form_button'>SEND</button> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>  
    )
}