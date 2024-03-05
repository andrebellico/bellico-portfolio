import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const contactSchema = z.object({
  from_name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres ' }),
  email: z.string().email(),
  message: z.string(),
})

type ContactSchema = z.infer<typeof contactSchema>

export default function ContactMe() {
  const { handleSubmit, register } = useForm<ContactSchema>({
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
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-pink-500 mb-6">Entre em contato</h1>
        <form onSubmit={handleSubmit(sendEmail)}>
          <div>
            <label className="text-pink-500 text-sm">Nome</label>
            <input
              type="text"
              className="border rounded p-2 text-xs w-full"
              placeholder="Nome"
              {...register('from_name')}
            />
          </div>
          <div>
            <label className="text-pink-500 text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="border rounded p-2 text-xs  w-full"
            />
          </div>
          <div>
            <label className="text-pink-500 text-sm">Mensagem!</label>
            <textarea
              placeholder="Digite sua mensagem..."
              {...register('message')}
              className="border rounded p-2 text-xs  w-full"
            />
          </div>
          <button className="bg-white text-black p-2 rounded" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
