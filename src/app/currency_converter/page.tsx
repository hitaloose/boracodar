"use client";

import "./styles.css";

import { CSSProperties } from "react";
import Image from "next/image";

import ArrowsExchangeIcon from "./assets/arrows-exchange.svg";

import { CurrencyDropdown } from "./components/currency-dropdown";

export default function Page() {
  return (
    <div
      className={`flex flex-col bg-white py-[64px] px-[80px] gap-[64px] rounded-[16px] shadow-[0px_4px_32px_rgba(15,23,42,0.15)]`}
    >
      <div className="flex flex-col gap-[16px]">
        <strong className="text-[20px] text-[#0F172A]">
          Conversor de moedas
        </strong>

        <div className="flex gap-[16px] items-center">
          <CurrencyDropdown />

          <Image src={ArrowsExchangeIcon} alt="Arrows Exchange Icon" />

          <CurrencyDropdown />
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <strong className="text-[20px] text-[#0F172A]">Taxa de câmbio</strong>

        <div className="w-[640px] h-[356px]">
          <ul className="area-chart">
            <li style={{ "--start": 0, "--end": 0.45 } as CSSProperties}>45</li>
            <li style={{ "--start": 0.45, "--end": 0.49 } as CSSProperties}>49</li>
            <li style={{ "--start": 0.49, "--end": 0.51 } as CSSProperties}>51</li>
            <li style={{ "--start": 0.51, "--end": 0.47 } as CSSProperties}>47</li>
            <li style={{ "--start": 0.47, "--end": 0.43 } as CSSProperties}>43</li>
            <li style={{ "--start": 0.43, "--end": 0.50 } as CSSProperties}>50</li>
            <li style={{ "--start": 0.50, "--end": 0.30 } as CSSProperties}>30</li>
            <li style={{ "--start": 0.30, "--end": 0.28 } as CSSProperties}>28</li>
            <li style={{ "--start": 0.28, "--end": 0.31 } as CSSProperties}>31</li>
            <li style={{ "--start": 0.31, "--end": 0.24 } as CSSProperties}>24</li>
            <li style={{ "--start": 0.24, "--end": 0.28 } as CSSProperties}>28</li>
            <li style={{ "--start": 0.28, "--end": 0.32 } as CSSProperties}>32</li>
            <li style={{ "--start": 0.32, "--end": 0.36 } as CSSProperties}>36</li>
            <li style={{ "--start": 0.36, "--end": 0.43 } as CSSProperties}>43</li>
            <li style={{ "--start": 0.43, "--end": 0.49 } as CSSProperties}>49</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
