import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const now = new Date();
    const date = new Date(value)
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (secondsAgo < 60) {
      return `hace ${secondsAgo} segundos`;
    } else if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      return `hace ${minutesAgo} minutos`;
    } else if (secondsAgo < 86400){
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return `hace ${hoursAgo} horas`;
    } else {
      const daysAgo = Math.floor(secondsAgo / 86400)
      return `hace ${daysAgo} dias`;
    }
  }
}
