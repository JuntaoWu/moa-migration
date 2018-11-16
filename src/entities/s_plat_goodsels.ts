import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("s_plat_goodsels",{schema:"sky_gdjzj"})
export class SPlatGoodsels {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"selCount"
        })
    selCount:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"goodsId"
        })
    goodsId:number | null;
        
}
