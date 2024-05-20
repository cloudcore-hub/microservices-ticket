import { Subjects, Publisher, OrderCancelledEvent } from '@cloudcorehub/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
