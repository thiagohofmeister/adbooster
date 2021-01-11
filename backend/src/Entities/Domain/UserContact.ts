import { v4 } from 'uuid'
import { User } from './User'

export class UserContact {
  id: string
  type: UserContactType
  value: string
  user?: User

  constructor(props: Omit<UserContact, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}

export enum UserContactType {
  PHONE = 'PHONE',
  CELLPHONE = 'CELLPHONE',
}
