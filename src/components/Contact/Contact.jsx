import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.mainDiv}>
        <div className={css.div}>
          <p className={css.text}>
            <IoPersonSharp className={css.icon} />
            {name}
          </p>
          <p className={css.text}>
            <FaPhone className={css.icon} />
            {number}
          </p>
        </div>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
