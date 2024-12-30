import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  community_id: number;

  @Column({ length: 255, nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' }) // กำหนดให้บันทึกเวลาอัตโนมัติเมื่อสร้าง
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' }) // กำหนดให้บันทึกเวลาอัตโนมัติเมื่อมีการแก้ไข
  updatedAt: Date;
}
