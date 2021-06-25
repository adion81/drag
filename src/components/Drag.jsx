import React ,{PureComponent} from 'react';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import aeonium from '../assets/img/aeonium-s.jpg';
import aloe from '../assets/img/aloe-s.jpg';
import cactus from '../assets/img/cactus-s.jpg';
import echeveria from '../assets/img/echeveria-s.jpg';
import sedum from '../assets/img/sedum-s.jpg';
import sempervivum from '../assets/img/sempervivum-s.jpg';
import succulents1 from '../assets/img/succulents-1.jpg';
import succulents2 from '../assets/img/succulents-2.jpg';


export default class Drag extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            suculents : [
                {
                    id: 0,
                    title:"Aeonium",
                    img: aeonium
                },
                {
                    id: 1,
                    title: "Aloe",
                    img: aloe
                },
                {
                    id: 2,
                    title: "Cactus",
                    img: cactus
                },
                {
                    id: 3,
                    title: "Echeveria",
                    img: echeveria
                },
                {
                    id: 4,
                    title: "Sedum",
                    img: sedum
                },
                {
                    id: 5,
                    title: "Sempervivum",
                    img: sempervivum
                },
                {
                    id: 6,
                    title: "Succulents 1",
                    img: succulents1
                },
                {
                    id: 7,
                    title: "Succulenets 2",
                    img: succulents2
                }

            ]
        }
        this.itemRenderer = this.itemRenderer.bind(this);
        this.handleRLDDChange = this.handleRLDDChange.bind(this);
    }

    itemRenderer(item,idx) {
        return (
            <div className="card">
                <img src={item.img} alt={item.title} className="card-img-top suc-img" />
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">ID: {item.id} - Index: {idx}</p>
                </div>
            </div>
        )
    }
    handleRLDDChange(reorderedItems) {
        this.setState({ suculents: reorderedItems });
    }

    render() {
        return(
            <div >
                <RLDD 
                    layout="horizontal"
                    items={this.state.suculents}
                    itemRenderer={this.itemRenderer}
                    onChange={this.handleRLDDChange}
                />
            </div>
        );
    }


}