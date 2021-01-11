import { UserGender } from '../Domain/User'
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import { AnnouncementEntity } from './AnnouncementEntity'
import { AnnouncementImpulseEntity } from './AnnouncementImpulseEntity'
import { OrderEntity } from './OrderEntity'
import { UserShippingAddressEntity } from './UserShippingAddressEntity'
import { UserContactEntity } from './UserContactEntity'

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  id: string

  @Column()
  dob: Date

  @Column({
    name: 'document_number'
  })
  documentNumber: string

  @Column()
  email: string

  @Column({
    type: 'enum',
    enum: UserGender
  })
  gender: UserGender

  @Column()
  image: string

  @Column()
  bio: string

  @Column()
  name: string

  @Column()
  password: string

  @Column({
    name: 'personal_document'
  })
  personalDocument: string

  @Column({
    name: 'billing_address_state'
  })
  billingAddressState: string

  @Column({
    name: 'billing_address_city'
  })
  billingAddressCity: string

  @Column({
    name: 'billing_address_district'
  })
  billingAddressDistrict: string

  @Column({
    name: 'billing_address_street'
  })
  billingAddressStreet: string

  @Column({
    name: 'billing_address_number'
  })
  billingAddressNumber: string

  @Column({
    name: 'billing_address_reference'
  })
  billingAddressReference?: string

  @Column({
    name: 'billing_address_zip_code'
  })
  billingAddressZipCode: string

  @Column({
    name: 'billing_address_complement'
  })
  billingAddressComplement?: string

  @OneToMany(() => AnnouncementEntity, entity => entity.user)
  @JoinColumn({
    name: 'user_id'
  })
  announcements?: AnnouncementEntity[]

  @OneToMany(() => AnnouncementImpulseEntity, entity => entity.user)
  @JoinColumn({
    name: 'user_id'
  })
  impulses?: AnnouncementImpulseEntity[]

  @OneToMany(() => OrderEntity, entity => entity.user)
  @JoinColumn({
    name: 'user_id'
  })
  orders?: OrderEntity[]

  @OneToMany(() => UserShippingAddressEntity, entity => entity.user)
  @JoinColumn({
    name: 'user_id'
  })
  shippingAddresses?: UserShippingAddressEntity[]

  @OneToMany(() => UserContactEntity, entity => entity.user)
  @JoinColumn({
    name: 'user_id'
  })
  contacts?: UserContactEntity[]

  constructor(props: UserEntity) {
    Object.assign(this, props)
  }
}
