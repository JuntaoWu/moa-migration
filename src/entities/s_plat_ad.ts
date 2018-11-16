import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_ad",{schema:"sky_gdjzj"})
export class SPlatAd {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("char",{ 
        nullable:true,
        length:32,
        name:"img"
        })
    img:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"online"
        })
    online:number | null;
        

    @Column("char",{ 
        nullable:true,
        length:255,
        name:"link"
        })
    link:string | null;
        
}
