import { status } from 'grpc'

export const errorsCode = {
  [status.OK]: 200,
  [status.CANCELLED]: 499,
  [status.DATA_LOSS]: 500,
  [status.DEADLINE_EXCEEDED]: 408,
  [status.NOT_FOUND]: 404,
  [status.PERMISSION_DENIED]: 403,
  [status.ALREADY_EXISTS]: 409,
  [status.UNAUTHENTICATED]: 401,
  [status.UNAVAILABLE]: 500,
  [status.UNKNOWN]: 505,
}
