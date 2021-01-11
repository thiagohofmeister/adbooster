import { User } from './User'
import { AnnouncementImpulse } from './AnnouncementImpulse'
import { v4 } from 'uuid'
import { UserShippingAddress } from './UserShippingAddress'

export class Order {
  id: string
  status: OrderStatus
  total: number
  createdAt?: Date
  updatedAt?: Date
  user?: User
  announcementImpulse?: AnnouncementImpulse
  userShippingAddress?: UserShippingAddress

  constructor(props: Omit<Order, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}

export enum OrderStatus {
  PENDING = 'PENDING',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  SHIPPING = 'SHIPPING',
  DELIVERED = 'DELIVERED'
}
