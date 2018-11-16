import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_system",{schema:"sky_gdjzj"})
export class SPlatSystem {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"scrollNotice"
        })
    scrollNotice:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"notice"
        })
    notice:string | null;
        
}
