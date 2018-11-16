import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_zuoyouba",{schema:"sky_gdjzj"})
export class SPlatZuoyouba {

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"attr"
        })
    attr:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"game_4"
        })
    game_4:string | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"district"
        })
    district:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"game_2"
        })
    game_2:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:15,
        name:"phone"
        })
    phone:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"name"
        })
    name:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"city"
        })
    city:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"game_3"
        })
    game_3:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:50,
        name:"game_1"
        })
    game_1:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"level"
        })
    level:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"time"
        })
    time:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"province"
        })
    province:string | null;
        
}
