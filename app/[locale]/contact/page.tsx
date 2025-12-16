import ContactForm from '@/components/common/ContactForm';
import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  return (
    <section className="section">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t('title')}</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">{t('title')}</h1>
          <p className="text-sm text-slate-700">{t('subtitle')}</p>
          <div className="card space-y-2 p-5 text-sm text-slate-700">
            <p>Nous répondons sous 24h ouvrées.</p>
            <p>Support portail client : support@id-group.com</p>
            <p>Sites : Wormhout (59) • Alpespace (73)</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
