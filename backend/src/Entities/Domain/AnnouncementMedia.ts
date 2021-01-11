import { Announcement } from './Announcement'
import { v4 } from 'uuid'

export class AnnouncementMedia {
  id: string
  link: string
  type: AnnouncementMediaType
  announcement: Announcement

  constructor(props: Omit<AnnouncementMedia, `id`>, id?: string) {
    Object.assign(this, props)

    this.id = id || v4()
  }
}

export enum AnnouncementMediaType {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE'
}
