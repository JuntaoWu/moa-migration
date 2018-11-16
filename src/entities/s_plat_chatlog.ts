import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_chatlog",{schema:"sky_gdjzj"})
export class SPlatChatlog {

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"content"
        })
    content:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"chatTime"
        })
    chatTime:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"toId"
        })
    toId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"ctype"
        })
    ctype:number | null;
        
}
