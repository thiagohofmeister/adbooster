import { v4 } from 'uuid'
import { User } from './User'

export class UserShippingAddress {
  id: string
  label: string
  state: string
  city: string
  district: string
  street: string
  number: string
  reference?: string
  zipCode: string
  complement?: string
  user?: User

  constructor(props: Omit<UserShippingAddress, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}
