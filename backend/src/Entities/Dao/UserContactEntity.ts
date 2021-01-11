import { UserEntity } from './UserEntity'
import { UserContactType } from '../Domain/UserContact'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity('user_contact')
export class UserContactEntity {
  @PrimaryColumn()
  id: string

  @Column({
    type: 'enum',
    enum: UserContactType
  })
  type: UserContactType

  @Column()
  value: string

  @ManyToOne(() => UserEntity, entity => entity.contacts)
  @JoinColumn({
    name: 'user_id'
  })
  user?: UserEntity

  constructor(props: UserContactEntity) {
    Object.assign(this, props)
  }
}
