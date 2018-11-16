import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_room_user",{schema:"sky_gdjzj"})
export class SPlatRoomUser {

    @Column("tinyint",{ 
        nullable:true,
        name:"oindex"
        })
    oindex:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"app"
        })
    app:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"outpai"
        })
    outpai:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"userId"
        })
    userId:number | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"status"
        })
    status:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roomId"
        })
    roomId:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"pai"
        })
    pai:string | null;
        
}
