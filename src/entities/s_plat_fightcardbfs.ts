import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_fightcardbfs",{schema:"sky_gdjzj"})
export class SPlatFightcardbfs {

    @Column("int",{ 
        nullable:true,
        name:"losts"
        })
    losts:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"wins"
        })
    wins:number | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"cardId"
        })
    cardId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"bf"
        })
    bf:number | null;
        
}
