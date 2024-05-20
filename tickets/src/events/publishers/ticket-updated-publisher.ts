import { Publisher, Subjects, TicketUpdatedEvent } from '@cloudcorehub/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
