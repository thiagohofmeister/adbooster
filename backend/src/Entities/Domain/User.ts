import { v4 } from 'uuid'
import { AnnouncementEntity } from '../Dao/AnnouncementEntity'
import { UserShippingAddressEntity } from '../Dao/UserShippingAddressEntity'
import { UserContactEntity } from '../Dao/UserContactEntity'
import { Announcement } from './Announcement'
import { UserShippingAddress } from './UserShippingAddress'
import { UserContact } from './UserContact'
import { AnnouncementImpulse } from './AnnouncementImpulse'
import { Order } from './Order'

export class User {
  id: string
  dob: Date
  documentNumber: string
  email: string
  gender: UserGender
  image: string
  bio: string
  name: string
  password: string
  personalDocument: string
  billingAddressState: string
  billingAddressCity: string
  billingAddressDistrict: string
  billingAddressStreet: string
  billingAddressNumber: string
  billingAddressReference?: string
  billingAddressZipCode: string
  billingAddressComplement?: string
  announcements?: Announcement[]
  impulses?: AnnouncementImpulse[]
  orders?: Order[]
  shippingAddresses?: UserShippingAddress[]
  contacts?: UserContact[]

  constructor(props: Omit<User, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}

export enum UserGender {
  MALE= 'MALE',
  FEMALE= 'FEMALE',
  OTHER= 'OTHER',
}
