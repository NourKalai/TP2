
import { UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from "typeorm";

export class Timestamp {
    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
    @CreateDateColumn({ update: false })
    CreatedAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}