import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Entity()
export class Task {
  @ApiProperty({ description: 'UUID of the task' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Title of the task' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Description of the task', required: false })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({ enum: TaskStatus })
  @Column({ type: 'text', default: TaskStatus.PENDING })
  status: TaskStatus;

  @ApiProperty({ description: 'Due date/time', required: false })
  @Column({ type: 'datetime', nullable: true })
  dueDateTime?: Date;
}