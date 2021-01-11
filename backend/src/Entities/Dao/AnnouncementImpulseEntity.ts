import { AnnouncementEntity } from './AnnouncementEntity'
import { UserEntity } from './UserEntity'
import { Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity('announcement_impulse')
export class AnnouncementImpulseEntity {
  @PrimaryColumn()
  id: string

  @OneToMany(() => AnnouncementEntity, entity => entity.impulses)
  @JoinColumn({
    name: 'announcement_id'
  })
  announcement: AnnouncementEntity

  @OneToMany(() => UserEntity, entity => entity.impulses)
  @JoinColumn({
    name: 'user_id'
  })
  user: UserEntity

  constructor(props: AnnouncementImpulseEntity) {
    Object.assign(this, props)
  }
}
