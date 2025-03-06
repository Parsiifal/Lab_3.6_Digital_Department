export class Task 
{
  id!: number;
  type!: string;
  priority!: string;
  status!: string;
  title!: string;
  description!: string;
  executor!: string;
  creator!: string;
  createdAt!: Date;
  lastModifiedAt!: Date;

  constructor(init?: Partial<Task>) 
  {
    Object.assign(this, init);
  }
}