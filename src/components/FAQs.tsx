"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";

const items = [
  {
    question: "What Payment method do you accept ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi non aliquid, soluta dolores cumque.",
  },
  {
    question: "How does the pricing work for team ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi non aliquid, soluta dolores cumque.",
  },
  {
    question: "Can i change my plan later ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi non aliquid, soluta dolores cumque.",
  },
  {
    question: "Is my data secure ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi non aliquid, soluta dolores cumque.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-white/30 ">
      <div
        className="flex text-lg font-bold cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className="flex-1">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={clsx("mt-4 text-white/70", {
          hidden: !isOpen,
          "": isOpen === true,
        })}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto select-none">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
