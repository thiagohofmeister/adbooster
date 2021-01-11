import { UserEntity } from './UserEntity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity('user_shipping_address')
export class UserShippingAddressEntity {
  @PrimaryColumn()
  id: string

  @Column()
  label: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  district: string

  @Column()
  street: string

  @Column()
  number: string

  @Column()
  reference?: string

  @Column({
    name: 'zip_code'
  })
  zipCode: string

  @Column()
  complement?: string

  @ManyToOne(() => UserEntity, entity => entity.shippingAddresses)
  @JoinColumn({
    name: 'user_id'
  })
  user?: UserEntity

  constructor(props: UserShippingAddressEntity) {
    Object.assign(this, props)
  }
}
