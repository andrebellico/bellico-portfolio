import StackIcon from 'tech-stack-icons'
import { useTranslations } from 'use-intl'

export default function StackAndUses() {
  const t = useTranslations()
  return (
    <>
      <h1 className="text-3xl -mb-6 justify-center text-center w-full text-white">
        {t('STACKANDUSES.title')}
      </h1>
      <div className="flex flex-row justify-center mx-28 my-20 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="grid-cols-2 gap-8 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 space-x-2">
            <StackIcon
              name="nextjs"
              className="border hover:bg-slate-200 p-4  w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="reactjs"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="css3"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="html5"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="tailwindcss"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="js"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="typescript"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="radixui"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="vitejs"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="framer"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="figma"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="canva"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />

            <StackIcon
              name="storybook"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />

            <StackIcon
              name="nodejs"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />

            <StackIcon
              name="mongodb"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="mysql"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="supabase"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="git"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="materialui"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
            <StackIcon
              name="github"
              className="border hover:bg-slate-200 p-4 w-16 bg-slate-50 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}
