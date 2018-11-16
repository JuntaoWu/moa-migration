import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_order",{schema:"sky_gdjzj"})
export class SPlatOrder {

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"orderFrom"
        })
    orderFrom:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"money"
        })
    money:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"agentId"
        })
    agentId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"status"
        })
    status:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"orderTime"
        })
    orderTime:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"orderType"
        })
    orderType:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"orderNo"
        })
    orderNo:string | null;
        
}
