import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_moneylogs",{schema:"sky_gdjzj"})
export class SPlatMoneylogs {

    @Column("int",{ 
        nullable:true,
        name:"nowMoney"
        })
    nowMoney:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"logTime"
        })
    logTime:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"money"
        })
    money:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:64,
        name:"des"
        })
    des:string | null;
        
}
