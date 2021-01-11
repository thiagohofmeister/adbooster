import { Announcement } from './Announcement'
import { User } from './User'
import { v4 } from 'uuid'

export class AnnouncementImpulse {
  id: string
  announcement: Announcement
  user: User

  constructor(props: Omit<AnnouncementImpulse, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}
