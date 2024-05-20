import { Subjects, Publisher, PaymentCreatedEvent } from '@cloudcorehub/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
