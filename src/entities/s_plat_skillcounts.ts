import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_skillcounts",{schema:"sky_gdjzj"})
export class SPlatSkillcounts {

    @Column("int",{ 
        nullable:true,
        name:"doHero"
        })
    doHero:number | null;
        

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"heroId"
        })
    heroId:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"roles"
        })
    roles:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"selCount"
        })
    selCount:number | null;
        
}
