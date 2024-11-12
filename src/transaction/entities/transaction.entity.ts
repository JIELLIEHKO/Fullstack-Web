import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn({name: 'transactionId'})
  id:number

  @Column({name: 'title'})
  title: string;

  @Column({ nullable: true }) // nullable: true Позволяет устанавливать тут null. ...
    // ...Это нужно для того, что если категория будет удалена, то останется транзакция чтобы мы могли ее обработать
  type: string;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.transactions, {})
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
