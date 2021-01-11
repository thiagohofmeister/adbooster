import { AnnouncementEntity } from './AnnouncementEntity'
import { AnnouncementMediaType } from '../Domain/AnnouncementMedia'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity('announcement_media')
export class AnnouncementMediaEntity {
  @PrimaryColumn()
  id: string

  @Column()
  link: string

  @Column({
    type: 'enum',
    enum: AnnouncementMediaType
  })
  type: AnnouncementMediaType

  @OneToMany(() => AnnouncementEntity, entity => entity.medias)
  @JoinColumn({
    name: 'announcement_id'
  })
  announcement: AnnouncementEntity

  constructor(props: AnnouncementMediaEntity) {
    Object.assign(this, props)
  }
}
