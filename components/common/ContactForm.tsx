'use client';

import {contactNeeds} from '@/data/content';
import {useState} from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="card space-y-4 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label className="block text-sm font-semibold text-brand-charcoal">Nom / organisation</label>
        <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-charcoal">Email professionnel</label>
        <input type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-charcoal">Votre besoin</label>
        <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" required>
          {contactNeeds.map((need) => (
            <option key={need}>{need}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-charcoal">Contexte</label>
        <textarea className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" rows={3} />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-orange px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-blue"
      >
        {sent ? 'Message envoyé (mock)' : 'Envoyer'}
      </button>
    </form>
  );
}
