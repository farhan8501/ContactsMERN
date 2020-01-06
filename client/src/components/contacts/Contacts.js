import React, { Fragment, useContext } from "react";
import ContactContext from "./../../context/contact/ContactContext";

import { ContactItem } from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Contacts = () => {
  //now we have access to any state or action associated with the below context
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};
