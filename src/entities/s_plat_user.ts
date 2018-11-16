import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_user",{schema:"sky_gdjzj"})
export class SPlatUser {

    @Column("int",{ 
        nullable:true,
        name:"wxsex"
        })
    wxsex:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"canTuiguang"
        })
    canTuiguang:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"score"
        })
    score:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"iswx"
        })
    iswx:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vipExp"
        })
    vipExp:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"regIp"
        })
    regIp:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:13,
        scale:0,
        name:"regTime"
        })
    regTime:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:128,
        name:"wxtoken"
        })
    wxtoken:string | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"createBy"
        })
    createBy:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:16,
        name:"tel"
        })
    tel:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vipLv"
        })
    vipLv:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:20,
        name:"webid"
        })
    webid:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"isLock"
        })
    isLock:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"token"
        })
    token:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"money"
        })
    money:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"des"
        })
    des:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"wxhead"
        })
    wxhead:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"name"
        })
    name:string | null;
        

    @Column("char",{ 
        nullable:true,
        length:128,
        name:"wxid"
        })
    wxid:string | null;
        
}
