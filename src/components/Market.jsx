import React from "react"
import {
  activity,
  Binance,
  binanx,
  bitco,
  Bitcoin,
  ether,
  Ethereum,
  Shiba,
  sol,
  Solana,
} from "../assets"

const Market = () => {
  return (
    <div className='w-full h-full flex justify-center'>
      <div className='dev1 mx-auto bg-primary pt-[232px] pb-[205px] overflow-hidden flex-1 flex-wrap flex items-center justify-center relative gap-[69px] '>
        {/* Bitcoin(BTC) Box + Text heading */}
        <div className=' flex flex-col items-start '>
          {/* text heading */}
          <div className='mb-[58px] flex items-center '>
            <div className='dev2'>
              <img
                src={activity}
                alt='activity'
                className='w-[16px] h-[16px] relative'
              />
            </div>
            <p className='cursor-default max-w-[146px] text-[16px] dev3'>
              trending Assets
            </p>
          </div>
          {/* Bitcoin Box */}
          <div className=' ml-[7px] relative pad'>
            {/* bitcoin icon */}
            <div className='bg-center flex items-center absolute dev4'>
              <img src={Bitcoin} alt='bitcoin' className='w-[51px] h-[50px]' />
            </div>
            {/* card details */}
            <div className='w-[291px] h-[351px] bg-center flex flex-col items-start relative dev5'>
              <p className='cursor-default w-[231px] text-[12px] text-center mb-[8px] ml-[11px] dev6'>
                Bitcoin (BTC)
              </p>
              <div className='dev7'>
                <p className='cursor-default w-[241px] text-[16px] text-center relative dev8 '>
                  $31,812.80
                </p>
                <p className='cursor-default w-[62.58px] text-[12px] absolute uppercase dev9 '>
                  +10%
                </p>
              </div>
              <p className='cursor-default w-[241px] text-[12px] text-center mb-[4px] ml-[4px] dev0'>
                Price
              </p>
              <div className='ml-[4px] flex items-center dev11 '>
                <p className='cursor-default w-[241px] text-[16px] text-center dev12'>
                  $60,000
                </p>
              </div>
              <p className='cursor-default w-[241px] text-[12px] text-center uppercase mb-[12px] ml-[6px] dev13'>
                tvl
              </p>
              {/* 3 ICONS */}
              <div className='ml-[64px] flex items-center dev14'>
                {/* solana */}
                <div className='mr-[12.88px] flex items-center dev15 '>
                  <img src={sol} alt='solana' className='w-' />
                </div>
                {/* Ethereum */}
                <div className='mr-[13.13px] flex items-center dev16 '>
                  {/* Binance */}
                  <img
                    src={ether}
                    alt='ethereum'
                    className='w-[23px] h-[22px]'
                  />
                </div>
                {/* Binance */}
                <img src={binanx} alt='binance' />
              </div>
              {/* footer text */}
              <p className='cursor-default w-[241px] text-center ml-[6px] text-[12px] dev17'>
                popular pairs
              </p>
            </div>
          </div>
        </div>
        {/* Solana(SOL) Box*/}
        <div className='mt-[90px]  relative pad'>
          {/* icon */}
          <div className='bg-center flex items-center absolute sol1'>
            <img src={Solana} alt='bitcoin' className='w-[51px] h-[50px]' />
          </div>
          {/* card details */}
          <div className='w-[291px] h-[351px] bg-center flex flex-col items-start relative sol3'>
            <p className='cursor-default w-[231px] text-[12px] text-center mb-[8px] ml-[11px] dev6'>
              Solana (SOL)
            </p>
            <div className='dev7'>
              <p className='cursor-default w-[241px] text-[16px] text-center relative dev8 '>
                $32.83
              </p>
              <p className='cursor-default w-[62.58px] text-[12px] absolute uppercase sol2 '>
                -12.32%
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center mb-[4px] ml-[4px] dev0'>
              Price
            </p>
            <div className='ml-[4px] flex items-center dev11 '>
              <p className='cursor-default w-[241px] text-[16px] text-center dev12'>
                $60,000
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center uppercase mb-[12px] ml-[6px] dev13'>
              tvl
            </p>
            {/* 3 ICONS */}
            <div className='ml-[64px] flex items-center dev14'>
              {/* solana */}
              <div className='mr-[12.88px] flex items-center dev15 '>
                <img src={bitco} alt='bitcoin' className='w-' />
              </div>
              {/* Ethereum */}
              <div className='mr-[13.13px] flex items-center dev16 '>
                {/* Binance */}
                <img src={ether} alt='ethereum' className='w-[23px] h-[22px]' />
              </div>
              {/* Binance */}
              <img src={binanx} alt='binance' />
            </div>
            {/* footer text */}
            <p className='cursor-default w-[241px] text-center ml-[6px] text-[12px] dev17'>
              popular pairs
            </p>
          </div>
        </div>
        {/* Ethereum(ETH) Box */}
        <div className='mt-[90px]  relative pad'>
          {/* icon */}
          <div className='bg-center flex items-center absolute eth3'>
            <img src={Ethereum} alt='ethereum' className='w-[51px] h-[50px]' />
          </div>
          {/* card details */}
          <div className='w-[291px] h-[351px] bg-center flex flex-col items-start relative eth1'>
            <p className='cursor-default w-[231px] text-[12px] text-center mb-[8px] ml-[11px] dev6'>
              Ethereum (ETH)
            </p>
            <div className='dev7'>
              <p className='cursor-default w-[241px] text-[16px] text-center relative dev8 '>
                $1,466.45
              </p>
              <p className='cursor-default w-[62.58px] text-[12px] absolute uppercase eth2 '>
                -11.93%
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center mb-[4px] ml-[4px] dev0'>
              Price
            </p>
            <div className='ml-[4px] flex items-center dev11 '>
              <p className='cursor-default w-[241px] text-[16px] text-center dev12'>
                $60,000
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center uppercase mb-[12px] ml-[6px] dev13'>
              tvl
            </p>
            {/* 3 ICONS */}
            <div className='ml-[64px] flex items-center dev14'>
              {/* solana */}
              <div className='mr-[12.88px] flex items-center dev15 '>
                <img src={sol} alt='solana' className='w-' />
              </div>
              {/* Ethereum */}
              <div className='mr-[13.13px] flex items-center dev16 '>
                {/* Binance */}
                <img src={bitco} alt='bitcoin' className='w-[23px] h-[22px]' />
              </div>
              {/* Binance */}
              <img src={binanx} alt='binance' />
            </div>
            {/* footer text */}
            <p className='cursor-default w-[241px] text-center ml-[6px] text-[12px] dev17'>
              popular pairs
            </p>
          </div>
        </div>
        {/* Binance USD(BUSD) Box */}
        <div className='mt-[90px]  relative pad'>
          {/* icon */}
          <div className='bg-center flex items-center absolute bnb1'>
            <img src={Binance} alt='binance' className='w-[51px] h-[50px]' />
          </div>
          {/* card details */}
          <div className='w-[291px] h-[351px] bg-center flex flex-col items-start relative bnb3'>
            <p className='cursor-default w-[231px] text-[12px] text-center mb-[8px] ml-[11px] dev6'>
              Binance USD (BUSD)
            </p>
            <div className='dev7'>
              <p className='cursor-default w-[241px] text-[16px] text-center relative dev8 '>
                $1.00
              </p>
              <p className='cursor-default w-[62.58px] text-[12px] absolute uppercase bnb2 '>
                +0.26%
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center mb-[4px] ml-[4px] dev0'>
              Price
            </p>
            <div className='ml-[4px] flex items-center dev11 '>
              <p className='cursor-default w-[241px] text-[16px] text-center dev12'>
                $60,000
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center uppercase mb-[12px] ml-[6px] dev13'>
              tvl
            </p>
            {/* 3 ICONS */}
            <div className='ml-[64px] flex items-center dev14'>
              {/* solana */}
              <div className='mr-[12.88px] flex items-center dev15 '>
                <img src={sol} alt='solana' className='w-' />
              </div>
              {/* Ethereum */}
              <div className='mr-[13.13px] flex items-center dev16 '>
                {/* Binance */}
                <img src={ether} alt='ethereum' className='w-[23px] h-[22px]' />
              </div>
              {/* Binance */}
              <img src={binanx} alt='binance' />
            </div>
            {/* footer text */}
            <p className='cursor-default w-[241px] text-center ml-[6px] text-[12px] dev17'>
              popular pairs
            </p>
          </div>
        </div>
        {/* Shiba Inu(SHIB) */}
        <div className='mt-[90px] relative pad'>
          {/* icon */}
          <div className='bg-center flex items-center absolute shib1'>
            <img src={Shiba} alt='shiba inu' className='w-[51px] h-[50px]' />
          </div>
          {/* card details */}
          <div className='w-[291px] h-[351px] bg-center flex flex-col items-start relative shib2'>
            <p className='cursor-default w-[231px] text-[12px] text-center mb-[8px] ml-[11px] dev6'>
              Shiba Inu (SHIB)
            </p>
            <div className='dev7'>
              <p className='cursor-default w-[241px] text-[16px] text-center relative dev8 '>
                $0.00000001948
              </p>
              <p className='cursor-default w-[62.58px] text-right text-[12px] absolute uppercase shib3 '>
                -8.1%
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center mb-[4px] ml-[4px] dev0'>
              Price
            </p>
            <div className='ml-[4px] flex items-center dev11 '>
              <p className='cursor-default w-[241px] text-[16px] text-center dev12'>
                $60,000
              </p>
            </div>
            <p className='cursor-default w-[241px] text-[12px] text-center uppercase mb-[12px] ml-[6px] dev13'>
              tvl
            </p>
            {/* 3 ICONS */}
            <div className='ml-[64px] flex items-center dev14'>
              {/* solana */}
              <div className='mr-[12.88px] flex items-center dev15 '>
                <img src={sol} alt='solana' className='w-' />
              </div>
              {/* Ethereum */}
              <div className='mr-[13.13px] flex items-center dev16 '>
                {/* Binance */}
                <img src={ether} alt='ethereum' className='w-[23px] h-[22px]' />
              </div>
              {/* Binance */}
              <img src={binanx} alt='binance' />
            </div>
            {/* footer text */}
            <p className='cursor-default w-[241px] text-center ml-[6px] text-[12px] dev17'>
              popular pairs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market
