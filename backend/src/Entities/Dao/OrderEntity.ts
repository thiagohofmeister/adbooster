import { UserEntity } from './UserEntity'
import { AnnouncementImpulseEntity } from './AnnouncementImpulseEntity'
import { UserShippingAddressEntity } from './UserShippingAddressEntity'
import { OrderStatus } from '../Domain/Order'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity('order')
export class OrderEntity {
  @PrimaryColumn()
  id: string

  @Column({
    type: 'enum',
    enum: OrderStatus
  })
  status: OrderStatus

  @Column()
  total: number

  @Column({
    name: 'created_at'
  })
  createdAt?: Date

  @Column({
    name: 'updated_at'
  })
  updatedAt?: Date

  @ManyToOne(() => UserEntity, entity => entity.orders)
  @JoinColumn({
    name: 'user_id'
  })
  user?: UserEntity

  @ManyToOne(() => AnnouncementImpulseEntity)
  @JoinColumn({
    name: 'announcement_impulse_id'
  })
  announcementImpulse?: AnnouncementImpulseEntity

  @ManyToOne(() => UserShippingAddressEntity)
  @JoinColumn({
    name: 'user_id'
  })
  userShippingAddress?: UserShippingAddressEntity

  constructor(props: OrderEntity) {
    Object.assign(this, props)
  }
}
