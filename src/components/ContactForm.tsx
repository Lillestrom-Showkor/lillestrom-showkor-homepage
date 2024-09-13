import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import cn from 'classnames';

import style from 'src/styles/components/ContactForm.module.scss';

type ContactFormProps = {
  showPhoneEntry?: boolean;
  subject?: string;
  className?: string;
  id?: string;
};

export default function ContactForm({ subject, className, id, showPhoneEntry = false }: ContactFormProps) {
  const [state, handleSubmit] = useForm('mzbnlzvy');

  return (
    <form id={id} className={cn(style.contactform, className)} onSubmit={handleSubmit}>
      <label htmlFor="email">E-postadresse *</label>
      <input id="email" type="email" name="email" required={true} />
      <ValidationError className={style.error} prefix="E-postadresse" field="email" errors={state.errors} />

      <input id="subject" type="hidden" name="subject" value={subject || ''} />

      {showPhoneEntry && <label htmlFor="phone">Telefonnummer</label>}
      {showPhoneEntry && <input id="phone" type="tel" name="phone" required={true} />}
      {showPhoneEntry && (
        <ValidationError className={style.error} prefix="Telefonnummer" field="phone" errors={state.errors} />
      )}

      <label htmlFor="message">Melding</label>
      <textarea id="message" name="message" />
      <ValidationError className={style.error} prefix="Melding" field="message" errors={state.errors} />
      {!state.succeeded && (
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      )}
      {state.succeeded && <span className={style.success}>Meldingen er sendt</span>}
    </form>
  );
}
