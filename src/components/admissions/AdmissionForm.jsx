import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const initialValues = {
  parentName: '',
  studentName: '',
  email: '',
  phone: '',
  classOfInterest: '',
  message: '',
  consent: false,
}

const classOptions = Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}

  if (!values.parentName.trim()) {
    errors.parentName = 'Parent or guardian name is required.'
  }

  if (!values.studentName.trim()) {
    errors.studentName = "Student's name is required."
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, like name@example.com.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a valid phone number with at least 10 digits.'
  }

  if (!values.classOfInterest) {
    errors.classOfInterest = 'Please select a class of interest.'
  }

  if (!values.consent) {
    errors.consent = 'Please confirm that you have reviewed the details above.'
  }

  return errors
}

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink transition-colors duration-200 placeholder:text-ink-soft/60 ${
    hasError ? 'border-red-500' : 'border-royal/15 focus:border-royal'
  }`

const requiredMark = (
  <span className="text-gold-deep" aria-hidden="true">
    *
  </span>
)

export default function AdmissionForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))

    setErrors((previous) => {
      if (!previous[name]) return previous
      const next = { ...previous }
      delete next[name]
      return next
    })

    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      setSubmitted(false)
      document.getElementById(`field-${firstError}`)?.focus()
      return
    }

    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <Section id="apply" tone="royal">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:pt-2">
          <SectionHeading
            tone="dark"
            eyebrow="Admission Enquiry"
            title="Tell us about your child"
            description="Fill in the details below and our admissions team will get in touch. It only takes a couple of minutes."
          />

          <ul className="mt-6 flex flex-col gap-3">
            {[
              'Takes about two minutes to complete',
              'No account, login or payment needed',
              'A frontend demo — nothing is sent or stored',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card bg-white p-6 shadow-soft sm:p-8">
          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm text-royal"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
              <p>
                Thank you! Your details have been validated successfully. This is a demonstration form, so
                nothing was sent or stored anywhere.
              </p>
            </div>
          )}

          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-parentName" className="text-sm font-medium text-royal">
                  Parent / Guardian Name {requiredMark}
                </label>
                <input
                  id="field-parentName"
                  name="parentName"
                  type="text"
                  value={values.parentName}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="e.g. Anita Sharma"
                  aria-required="true"
                  aria-invalid={Boolean(errors.parentName)}
                  aria-describedby={errors.parentName ? 'field-parentName-error' : undefined}
                  className={fieldClass(Boolean(errors.parentName))}
                />
                {errors.parentName && (
                  <p id="field-parentName-error" className="text-xs font-medium text-red-600">
                    {errors.parentName}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-studentName" className="text-sm font-medium text-royal">
                  Student Name {requiredMark}
                </label>
                <input
                  id="field-studentName"
                  name="studentName"
                  type="text"
                  value={values.studentName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav Sharma"
                  aria-required="true"
                  aria-invalid={Boolean(errors.studentName)}
                  aria-describedby={errors.studentName ? 'field-studentName-error' : undefined}
                  className={fieldClass(Boolean(errors.studentName))}
                />
                {errors.studentName && (
                  <p id="field-studentName-error" className="text-xs font-medium text-red-600">
                    {errors.studentName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-email" className="text-sm font-medium text-royal">
                  Email Address {requiredMark}
                </label>
                <input
                  id="field-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="name@example.com"
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'field-email-error' : undefined}
                  className={fieldClass(Boolean(errors.email))}
                />
                {errors.email && (
                  <p id="field-email-error" className="text-xs font-medium text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="field-phone" className="text-sm font-medium text-royal">
                  Phone Number {requiredMark}
                </label>
                <input
                  id="field-phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+91 98765 43210"
                  aria-required="true"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'field-phone-error' : undefined}
                  className={fieldClass(Boolean(errors.phone))}
                />
                {errors.phone && (
                  <p id="field-phone-error" className="text-xs font-medium text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="field-classOfInterest" className="text-sm font-medium text-royal">
                Class of Interest {requiredMark}
              </label>
              <select
                id="field-classOfInterest"
                name="classOfInterest"
                value={values.classOfInterest}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={Boolean(errors.classOfInterest)}
                aria-describedby={errors.classOfInterest ? 'field-classOfInterest-error' : undefined}
                className={fieldClass(Boolean(errors.classOfInterest))}
              >
                <option value="">Select a class</option>
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.classOfInterest && (
                <p id="field-classOfInterest-error" className="text-xs font-medium text-red-600">
                  {errors.classOfInterest}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="field-message" className="text-sm font-medium text-royal">
                Message <span className="font-normal text-ink-soft">(optional)</span>
              </label>
              <textarea
                id="field-message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                placeholder="Anything you would like us to know?"
                className={`${fieldClass(false)} resize-y`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="field-consent" className="flex items-start gap-3 text-sm text-ink-soft">
                <input
                  id="field-consent"
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'field-consent-error' : undefined}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-royal/30 accent-royal"
                />
                <span>I confirm that I have reviewed the details I entered and they are correct.</span>
              </label>
              {errors.consent && (
                <p id="field-consent-error" className="text-xs font-medium text-red-600">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-royal/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-ink-soft">
                Fields marked <span className="text-gold-deep">*</span> are required. This form is for
                demonstration only.
              </p>
              <Button type="submit" variant="gold" size="lg">
                Submit Enquiry
                <Send size={18} aria-hidden="true" />
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}
