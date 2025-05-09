import React from 'react';
import { TbUserFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p>
          <TbUserFilled className="my-icon" size="24" /> {name}
        </p>
        <p>
          <FaPhone className="my-icon" size="24" /> {number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
