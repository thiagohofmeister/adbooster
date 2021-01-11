import { UserEntity } from './UserEntity'
import { AnnouncementStatus, AnnouncementType } from '../Domain/Announcement'
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { JoinColumn } from 'typeorm/browser'
import { AnnouncementMediaEntity } from './AnnouncementMediaEntity'
import { AnnouncementImpulseEntity } from './AnnouncementImpulseEntity'

@Entity('announcement')
export class AnnouncementEntity {
  @PrimaryColumn()
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column({
    name: 'impulse_payout_limit'
  })
  impulsePayoutLimit: number

  @Column()
  price: number

  @Column()
  type: AnnouncementType

  @Column()
  status: AnnouncementStatus

  @OneToMany(() => UserEntity, entity => entity.announcements)
  @JoinColumn({
    name: 'user_id'
  })
  user?: UserEntity

  @ManyToOne(() => AnnouncementMediaEntity, entity => entity.announcement)
  @JoinColumn({
    name: 'announcement_id'
  })
  medias?: AnnouncementMediaEntity[]

  @OneToMany(() => AnnouncementImpulseEntity, entity => entity.announcement)
  @JoinColumn({
    name: 'announcement_id'
  })
  impulses?: AnnouncementImpulseEntity[]

  constructor(props: AnnouncementEntity) {
    Object.assign(this, props)
  }
}
