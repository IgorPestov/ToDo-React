import React, {Component} from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: '',
        color: '#f7b0ff'
    };


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label, this.state.color);
        this.setState({
            label: '',

        })
    };
    onChangeRadio = (e) => {
        this.props.radioBtn();
        this.setState( {
            color: e.target.style.background
        });

    };

    render() {
        return (
            <form className='item-add-form'
                  onSubmit={this.onSubmit}

            >
                <input type="text"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}
                />
                <div>
                    <div className="all-radio" >
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#f7b0ff'}}
                               type='radio' value='1'
                               defaultChecked
                               onChange={this.onChangeRadio} />
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#ff9c87'}}
                               type='radio' value='2' id='2'

                               onChange={this.onChangeRadio}/>
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#58996e'}}
                               type='radio' value='3' id='3'
                               onChange={this.onChangeRadio}/>
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#00ffc8'}}
                               type='radio' value='4' id='4'
                               onChange={this.onChangeRadio}/>
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#b4c2ff'}}
                               type='radio' value='5' id='5'
                               onChange={this.onChangeRadio}/>
                        <input name="choice-color"
                               className='radio active'
                               style={{background: '#99ffab'}}
                               type='radio' value='6' id='6'
                               onChange={this.onChangeRadio}/>
                    </div>
                    <button>
                        Add
                    </button>
                </div>

            </form>
        )
    }
}

