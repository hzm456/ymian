import { useState, useEffect } from "react";
import './coupone.scss'
export const CouponBanner = () => {
    const [time, setTime] = useState<number>(86400)
    useEffect(()=>{
        let timee=setInterval(()=>{
            if(time==0){
                clearInterval(timee)
                return
            }
            setTime((e)=>e-1)
        },1000)
        return ()=>{
            if(time!=86400){
                clearInterval(timee)
            }
        }
    },[])
    return <div className="coupon">
        <span>Ends in</span>
        <div>{Math.floor(time/60/60)}</div>
        <span>h</span>
        <div>{Math.floor(time/60%60)}</div>
        <span>m</span>
        <div>{Math.floor(time%60)}</div>
        <span>s</span>
    </div>
}