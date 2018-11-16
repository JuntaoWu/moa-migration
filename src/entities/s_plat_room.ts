import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_room",{schema:"sky_gdjzj"})
export class SPlatRoom {

    @Column("tinyint",{ 
        nullable:true,
        name:"roomType"
        })
    roomType:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"limitPlayers"
        })
    limitPlayers:number | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"clubId"
        })
    clubId:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"roomCfg"
        })
    roomCfg:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"roomData"
        })
    roomData:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"difen"
        })
    difen:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"createTime"
        })
    createTime:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"status"
        })
    status:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"app"
        })
    app:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"lifeSec"
        })
    lifeSec:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"creater"
        })
    creater:number | null;
        
}
