type AccordionPropType = {
  question: string;
  answer: string;
  handleOnClick: () => void;
  open: boolean
}

export default function Accordion({ question, answer, handleOnClick, open }: AccordionPropType) {
  return (
    <div className="space-y-2 py-4">
      <h2 onClick={handleOnClick} className={`md:text-lg ${open && "font-semibold"} cursor-pointer`}>{question}</h2>
      <p className={`text-black overflow-hidden transition-all ease-in-out text-sm md:text-base ${open ? 'opacity-100 h-[150px] md:h-[100px] lg:h-20' : 'opacity-0 h-0'} duration-300`}>{answer}</p>
    </div>
  )
}