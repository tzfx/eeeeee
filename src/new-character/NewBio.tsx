import React, { ChangeEvent } from 'react';
import { Select } from 'semantic-ui-react';
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';
import { CharacterBioBuilder } from '../config/rulesets/shadowrun/6e/CharacterBioBuilder';
import { Metatypes } from '../config/rulesets/shadowrun/6e/metatype/Metatypes';


type Props = {
    bioFinished: (bio: CharacterBio) => void
} & any;

type State = {
    name?: string,
    ethnicity?: string,
    sex?: "M" |"F",
    age?: number,
    height?: number,
    weight?: number,
    metatype?: string,
    bioBuilder: CharacterBioBuilder;
}


class NewBio extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            bioBuilder: new CharacterBioBuilder()
        };
    }
    
    checkIfDone() {
        this.props.bioFinished(this.state.bioBuilder.isReady() ? this.state.bioBuilder.build() : undefined);
    }
    
    updateMeta = (value: string) => {
      const type = Metatypes.types.find(t => t.name === value);
      if (type !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setMetatype(type).setHeight(type.averageHeight).setWeight(type.averageWeight)});
      }
      this.checkIfDone();
    }
  
    updateName = (event: ChangeEvent<any>) => {
        if (event.target?.value !== undefined) {
            this.setState({bioBuilder: this.state.bioBuilder.setName(event.target.value)});
        }
        this.checkIfDone();
    }
  
    updateEthnicity = (event: ChangeEvent<any>) => {
        if (event.target?.value !== undefined) {
            this.setState({bioBuilder: this.state.bioBuilder.setEthnicity(event.target.value)});
        }
        this.checkIfDone();
    }
  
  updateSex = (_: any, element: any) => {
    if (element.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setSex(element.value)});
    }
    this.checkIfDone();
  }
  
  updateAge = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setAge(event.target.value)});
    }
    this.checkIfDone();
  }
  
 updateHeight = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setHeight(event.target.value)});
    }
    this.checkIfDone();
  }
  
  updateWeight = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setWeight(event.target.value)});
    }
    this.checkIfDone();
  }

  render() {
    return (
        <div>
            <h3><i className="random icon"></i></h3>
            <form className="ui form container">
                <div className="two fields">
                    <div className="field">
                        <label>
                            Name
                        </label>
                        <input type="text" placeholder="Name" onChange={this.updateName} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label>
                            Ethnicity
                        </label>
                        <input type="text" placeholder="Ethnicity" onChange={this.updateEthnicity} value={this.state.ethnicity} />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>
                            Metatype
                        </label>
                        <Select
                         compact
                         placeholder="Metatype"
                         onChange={(_, {value}) => { this.updateMeta(value as string) }} 
                         options={
                             Metatypes.types.map(type => {
                                return {
                                    key: type.name,
                                    value: type.name,
                                    text: type.name
                                }
                             })
                         }
                        >
                        </Select>
                    </div>
                    <div className="field">
                        <label>Sex</label>
                        <Select
                         compact
                         placeholder="Sex"
                         options={[{key: "M", value: "M", text: "Male"}, {key: "F", value: "F", text: "Female"}]}
                         onChange={this.updateSex}>
                        </Select>
                    </div>
                </div>
                <div className="three fields">
                    <div className="field">
                        <label>
                            Age
                        </label>
                        <input type="number" min="18" placeholder="Age" onChange={this.updateAge} value={this.state.bioBuilder.age} />
                    </div>
                    <div className="field">
                        <label>
                            Weight (kg)
                        </label>
                        <input type="number" min="20" placeholder="Weight" onChange={this.updateWeight} value={this.state.bioBuilder.weight} />
                    </div>
                    <div className="field">
                        <label>
                            Height (m)
                        </label>
                        <input type="number" min="1.0" placeholder="Height" onChange={this.updateHeight} value={this.state.bioBuilder.height} />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default NewBio;