import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_messages",{schema:"sky_gdjzj"})
export class SPlatMessages {

    @Column("char",{ 
        nullable:true,
        length:64,
        name:"title"
        })
    title:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"logTime"
        })
    logTime:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"mtype"
        })
    mtype:number | null;
        
}
