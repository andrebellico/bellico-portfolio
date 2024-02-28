import { HeaderText } from './HeaderText'

export default function HomeHeader() {
  const sentence = 'I’m a developer and designer'.split('')

  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl flex">
          {sentence.map((letter, index) => {
            return (
              <HeaderText key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </HeaderText>
            )
          })}
        </div>
      </div>
    </div>
  )
}
