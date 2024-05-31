import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import style from 'src/styles/components/ContactForm.module.scss';

type ContactFormProps = {
  subject?: string;
};

export default function ContactForm({ subject }: ContactFormProps) {
  const [state, handleSubmit] = useForm('mzbnlzvy');

  return (
    <form className={style.contactform} onSubmit={handleSubmit}>
      <label htmlFor="email">E-postadresse</label>
      <input id="email" type="email" name="email" required={true} />
      <ValidationError className={style.error} prefix="E-postadresse" field="email" errors={state.errors} />

      <input id="subject" type="hidden" name="subject" value={subject || ''} />

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
