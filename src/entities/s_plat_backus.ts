import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_backus",{schema:"sky_gdjzj"})
export class SPlatBackus {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"logTime"
        })
    logTime:string | null;
        
}
