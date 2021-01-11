import { User } from './User'
import { v4 } from 'uuid'
import { AnnouncementMedia } from './AnnouncementMedia'
import { AnnouncementImpulse } from './AnnouncementImpulse'

export class Announcement {
  id: string
  title: string
  description: string
  impulsePayoutLimit: number
  price: number
  type: AnnouncementType
  status: AnnouncementStatus
  user?: User
  medias?: AnnouncementMedia[]
  impulses?: AnnouncementImpulse[]

  constructor(props: Omit<Announcement, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}

export enum AnnouncementType {
  BRONZE= 'BRONZE',
  SILVER= 'SILVER',
  GOLD= 'GOLD',
}

export enum AnnouncementStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
}
