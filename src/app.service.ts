import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to piggy-kolo! \n lets drop the coins!! ca-ching 🤑';
  }
}
