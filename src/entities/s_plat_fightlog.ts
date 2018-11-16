import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_fightlog",{schema:"sky_gdjzj"})
export class SPlatFightlog {

    @Column("int",{ 
        nullable:true,
        name:"isHaoren"
        })
    isHaoren:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u2"
        })
    u2:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u1"
        })
    u1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u4"
        })
    u4:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u5"
        })
    u5:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u6"
        })
    u6:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u7"
        })
    u7:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"roomCfg"
        })
    roomCfg:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u8"
        })
    u8:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c1"
        })
    c1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c8"
        })
    c8:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c3"
        })
    c3:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c2"
        })
    c2:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n8"
        })
    n8:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"logTime"
        })
    logTime:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n7"
        })
    n7:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c6"
        })
    c6:number | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"c7"
        })
    c7:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c4"
        })
    c4:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"c5"
        })
    c5:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"u3"
        })
    u3:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n1"
        })
    n1:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n2"
        })
    n2:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n3"
        })
    n3:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n5"
        })
    n5:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n4"
        })
    n4:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roomId"
        })
    roomId:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"n6"
        })
    n6:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"playSec"
        })
    playSec:number | null;
        
}
