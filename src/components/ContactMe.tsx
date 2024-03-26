'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { useToast } from '@/components/ui/use-toast'
import { useTranslations } from 'use-intl'

const contactSchema = z.object({
  from_name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres ' }),
  email: z.string().email(),
  message: z.string(),
})

type ContactSchema = z.infer<typeof contactSchema>

export default function ContactMe() {
  const t = useTranslations()
  const { toast } = useToast()
  const { handleSubmit, register, reset } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  const sendEmail = (formData: ContactSchema) => {
    emailjs
      .send(
        'service_7kpjmzm',
        'template_v4crm2c',
        formData,
        'UhCSQGfH7W_qaBpJC',
      )
      .then(
        () => {
          toast({
            title: 'Mensagem enviada',
            description: 'Sua mensagem foi enviado com sucesso!!',
          })
        },
        (error) => {
          toast({
            title: 'Mensagem não enviada',
            description: error.text,
            variant: 'destructive',
          })
        },
      )

    reset()
  }

  return (
    <div
      id="ContactMe"
      className="h-screen mx-24  flex justify-center items-center"
    >
      <div className="flex flex-col gap-3">
        <h1 className="sm:text-5xl text-2xl text-pink-500 mb-6">
          {t('CONTACT.title')}
        </h1>
        <form onSubmit={handleSubmit(sendEmail)}>
          <div>
            <label className="text-pink-500 text-sm">
              {t('CONTACT.inputName')}
            </label>
            <input
              type="text"
              className="border rounded p-2 text-xs w-full"
              placeholder={t('CONTACT.placeholderName')}
              {...register('from_name')}
            />
          </div>
          <div>
            <label className="text-pink-500 text-sm">
              {t('CONTACT.inputEmail')}
            </label>
            <input
              type="email"
              placeholder={t('CONTACT.placeholderEmail')}
              {...register('email')}
              className="border rounded p-2 text-xs  w-full"
            />
          </div>
          <div>
            <label className="text-pink-500 text-sm">
              {t('CONTACT.inputMessage')}
            </label>
            <textarea
              placeholder={t('CONTACT.placeholderMessage')}
              {...register('message')}
              className="border rounded p-2 text-xs  w-full"
            />
          </div>
          <button
            className="bg-white mt-2 text-black p-2 rounded"
            type="submit"
          >
            {t('CONTACT.button')}
          </button>
        </form>
      </div>
    </div>
  )
}
