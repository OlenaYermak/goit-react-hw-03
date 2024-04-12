import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css"

export default function Contact({ nameContact, numberContact, onDelete, id } ) {
    return (
        <div className={css.contactWrapper}>
            <div className={ css.contactDataWrapper}>
            <p> <FaUser className={css.icon} />{nameContact}</p>
            <p> <FaPhoneAlt className={css.icon} />{numberContact}</p>
            </div>
            <button className={css.deleteBtn} onClick={() => onDelete(id)} >Delete</button>
            </div>
    );
}
