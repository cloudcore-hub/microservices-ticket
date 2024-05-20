import { Publisher, OrderCreatedEvent, Subjects } from '@cloudcorehub/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
