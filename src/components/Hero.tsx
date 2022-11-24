import WordmarkInverted from "./Logos/WordmarkInverted"

export default function Hero() {
  return (
    <section className="be-section bg-primary text-light hero-pattern">
      <div className="mx-auto w-full flex justify-center items-center max-w-4xl py-11 px-10">
        <WordmarkInverted className="max-w-[320px] min-w-[128px] w-full h-auto" />
      </div>
    </section>
  )
}
