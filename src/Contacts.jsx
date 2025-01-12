function Contacts() {
    return(
        <div className="contacts">
            <h2>contact us</h2>
            <p>You can contact us in the following ways</p>
            <div>
                <h4 className="phone">8 800 111 22 33</h4>
            </div>
            
            <p className="mail">Email: yourcosmetic@yourcosmetic.com</p>
            
            <div className="messenger">
                <p><img className="icons" src="https://img.icons8.com/?size=100&id=16733&format=png&color=000000" width="25px" /> WhatsApp</p>
                <p><img className="icons" src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=000000" width="25px" /> Telegram</p>
            </div>                      
        </div>
    )
}

export default Contacts;