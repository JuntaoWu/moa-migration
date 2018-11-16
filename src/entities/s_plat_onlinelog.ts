import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_onlinelog",{schema:"sky_gdjzj"})
export class SPlatOnlinelog {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"onlineTime"
        })
    onlineTime:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"offlineSec"
        })
    offlineSec:number | null;
        
}
