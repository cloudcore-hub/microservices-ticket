import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@cloudcorehub/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
