import style from './Relogio.module.scss'
interface Props{
    time:number | undefined
}
export default function  Relogio ({time = 0}: Props){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const minutesString = String(minutes)
    const secondesString = String(seconds)
    const [minuteDezena, MinuteUnidade] = minutesString.padStart(2,'0')
    const [secondsDezena, secondsUnidade] = secondesString.padStart(2,'0')
return(
    <>
        <span className={style.relogioNumero}>{minuteDezena}</span>
        <span className={style.relogioNumero}>{MinuteUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secondsDezena}</span>
        <span className={style.relogioNumero}>{secondsUnidade}</span>
    </>
    )
}