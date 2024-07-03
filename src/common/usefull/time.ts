export function timeToSeconds(tempo:string){
      const [hour=0, minute=0, seconds =0] =tempo.split(':') 
      return Number(hour) *3600 + Number(minute) * 60 + Number(seconds)  

}