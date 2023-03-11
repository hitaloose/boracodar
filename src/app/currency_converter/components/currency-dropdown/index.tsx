import "./styles.css";

import { useCallback, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";

import EUAIcon from "../../assets/eua.png";
import BRLIcon from "../../assets/brl.png";
import CHFIcon from "../../assets/chf.png";
import EURIcon from "../../assets/eur.png";
import GBPIcon from "../../assets/gbp.png";
import JPYIcon from "../../assets/jpy.png";
import ChevronIcon from "../../assets/chevron-down.svg";

type Currency = {
  icon: StaticImageData;
  prefix: string;
  label: string;
  value: string;
};

const currencies: Currency[] = [
  {
    prefix: "$",
    label: "EUA",
    value: "eua",
    icon: EUAIcon
  },
  {
    prefix: "R$",
    label: "BRL",
    value: "brl",
    icon: BRLIcon
  },
  {
    prefix: "CHF",
    label: "CHF",
    value: "chf",
    icon: CHFIcon
  },
  {
    prefix: "€",
    label: "EUR",
    value: "eur",
    icon: EURIcon
  },
  {
    prefix: "£",
    label: "GBP",
    value: "gbp",
    icon: GBPIcon
  },
  {
    prefix: "JP¥",
    label: "JPY",
    value: "jpy",
    icon: JPYIcon
  }
];

export const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0]
  );

  const display = useMemo(() => (isOpen ? "block" : "none"), [isOpen]);

  const handleDropdownClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionSelectClick = useCallback((currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  }, []);

  return (
    <div className="flex border-[1.5px] border-[#7C3AED] rounded-[8px] h-[56px]">
      <div className="flex items-center gap-[8px] rounded-[8px] px-[16px] text-[#0F172A] text-[16px]">
        <span>{selectedCurrency?.prefix}</span>
        <input
          className="block outline-0 rounded-[8px] h-[100%]"
          type="number"
        />
      </div>

      <div className="with-divider relative">
        <div
          className="rounded-[8px] h-[100%] cursor-pointer"
          onClick={handleDropdownClick}
        >
          <div className="flex flex-row items-center p-[16px] gap-[8px] bg-[#EDE9FE] rounded-tr-[8px] rounded-br-[8px] cursor-pointer h-[100%] w-[130px]">
            {selectedCurrency && (
              <>
                <Image
                  src={selectedCurrency.icon}
                  alt={selectedCurrency.label}
                />
                {selectedCurrency.label}
              </>
            )}
            <Image className="ml-auto" src={ChevronIcon} alt="Chevron" />
          </div>
        </div>

        <div
          style={{ display }}
          className="z-[999] rounded-[8px] shadow-[0px_4px_16px_rgba(15,23,42,0.15)] overflow-y-scroll max-h-[130px] absolute left-0 w-[100%] mt-2"
        >
          {currencies.map((currency) => (
            <div
              key={currency.value}
              className="flex items-center gap-[8px] px-[16px] py-[12px] bg-white hover:bg-[#EDE9FE] h-[48px] cursor-pointer"
              onClick={() => handleOptionSelectClick(currency)}
            >
              <Image src={currency.icon} alt={currency.label} />
              {currency.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
