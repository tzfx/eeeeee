import { Button, Icon } from "semantic-ui-react";
import React from "react";
import { Attributes } from "../config/rulesets/shadowrun/6e/Attributes";
import { CharacterBio } from "../config/rulesets/shadowrun/6e/CharacterBio.interface";
import { TwoWayIterator } from "../util/TwoWayIterator.class";
import NewAttributes from "./NewAttributes";
import NewBio from "./NewBio";
import NewPriorities, { State as PriorityState } from "./NewPriorities";
import { Skill } from "../config/rulesets/shadowrun/6e/skills/Skill.interface";
import { CharacterService } from "../api/CharacterService";
import NewSkills from "./NewSkills";
import { Quality } from "../config/rulesets/shadowrun/6e/qualities/Quality";
import { Link } from "react-router-dom";

type Progress =
  | "bio"
  | "priorities"
  | "attributes"
  | "skills"
  | "magic"
  | "qualities"
  | "summary";

interface State {
  bio?: CharacterBio;
  priorities?: PriorityState;
  attributes?: Attributes;
  skills?: Skill[];
  spells?: [];
  qualities?: Quality[];
  progress: Progress;
}

interface Props {
  newCharacterCreated: () => void;
  doExit: () => void;
}

export class NewCharacter extends React.Component<Props, State> {
  private progression: TwoWayIterator<Progress>;

  constructor(props: Props) {
    super(props);
    this.progression = new TwoWayIterator([
      "bio",
      "priorities",
      "attributes",
      "skills",
      "magic",
      "qualities",
      "summary",
    ]);
    this.state = { progress: this.progression.next() };
  }

  handleBioFinished = (bio: CharacterBio) => {
    this.setState({ bio: bio });
  };

  handlePrioritiesFinished = (prios: any) => {
    this.setState({ priorities: prios });
  };

  handleAttributesFinished = (attrs: Attributes | undefined) => {
    this.setState({ attributes: attrs });
  };

  handleSkillsFinished = (skills: Skill[]) => {
    this.setState({ skills });
  };

  saveAndExit = () => {
    this.props.doExit();
  };

  goNext = () => {
    this.setState({ progress: this.progression.next() });
  };

  goBack = () => {
    this.setState({ progress: this.progression.previous() });
  };

  stepActive = (step: Progress): string => {
    return this.state.progress === step ? "active" : "";
  };

  stepCompleted = (step: Progress): string => {
    let complete = false;
    switch (step) {
      case "bio":
        complete = this.state.bio != null;
        break;
      case "priorities":
        complete = this.state.priorities != null;
        break;
      case "attributes":
        complete = this.state.attributes != null;
        break;
      case "skills":
        complete = this.state.skills != null;
        break;
    }
    return complete ? "completed" : "";
  };

  render() {
    let currentView;
    switch (this.state.progress) {
      case "bio":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <i className="address card icon"></i>
              Bio
            </h2>
            <NewBio bioFinished={this.handleBioFinished} />
            <Button as={Link} to="/home" onClick={() => this.saveAndExit()}>
              <Icon name="chevron left" /> Exit
            </Button>
            <Button
              disabled={this.state.bio == null}
              onClick={() => {
                CharacterService.createCharacter(
                  this.state.bio as CharacterBio
                ).then(() => this.props.newCharacterCreated());
                this.goNext();
              }}
            >
              Save & Continue to Priorities <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "priorities":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <i className="sort amount up icon"></i>
              Priorities
            </h2>
            <NewPriorities prioritiesFinished={this.handlePrioritiesFinished} />
            <Button onClick={() => this.goBack()}>
              <Icon name="chevron left" /> Back to Bio
            </Button>
            <Button
              disabled={this.state.priorities == null}
              onClick={() => this.goNext()}
            >
              Save & Continue to Attributes <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "attributes":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <i className="sliders horizontal icon"></i>
              Attributes
            </h2>
            <NewAttributes
              metatype={(this.state.bio as any)?.metatype}
              priority={this.state.priorities as any}
              attributesFinished={this.handleAttributesFinished}
            />
            <Button onClick={() => this.goBack()}>
              <Icon name="chevron left" /> Back to Priorities
            </Button>
            <Button
              disabled={this.state.attributes == null}
              onClick={() => this.goNext()}
            >
              Save & Continue to Skills <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "skills":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <i className="star icon"></i>
              Skills
            </h2>
            <NewSkills
              skillPoints={this.state.priorities?.Skills?.value}
              skillsFinished={this.handleSkillsFinished}
            />
            <Button onClick={() => this.goBack()}>
              <Icon name="chevron left" /> Back to Attributes
            </Button>
            <Button
              disabled={this.state.skills == null}
              onClick={() => this.goNext()}
            >
              Save & Continue to Magic
              <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "magic":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <Icon name="magic" />
              Magic
            </h2>
            <NewSkills
              skillPoints={this.state.priorities?.Skills?.value}
              skillsFinished={this.handleSkillsFinished}
            />
            <Button onClick={() => this.goBack()}>
              <Icon name="chevron left" /> Back to Skills
            </Button>
            <Button
              disabled={this.state.spells == null}
              onClick={() => this.goNext()}
            >
              Save & Continue to Qualities
              <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "qualities":
        currentView = (
          <div>
            <br />
            <h2 className="ui horizontal divider header">
              <Icon name="shield alternate" />
              Qualities
            </h2>
            <NewSkills
              skillPoints={this.state.priorities?.Skills?.value}
              skillsFinished={this.handleSkillsFinished}
            />
            <Button onClick={() => this.goBack()}>
              <Icon name="chevron left" /> Back to Magic
            </Button>
            <Button
              disabled={this.state.qualities == null}
              onClick={() => this.goNext()}
            >
              Save & Complete Initial Creation
              <Icon name="chevron right" />
            </Button>
          </div>
        );
        break;
      case "summary":
        break;
      default:
        currentView = <div>Oh no.</div>;
    }
    return (
      <div>
        <br />
        <div className="ui ordered steps fluid mini">
          <div
            className={`${this.stepCompleted("bio")} ${this.stepActive(
              "bio"
            )} step`}
          >
            <div className="content">
              <div className="title">Bio</div>
              <div className="description">Set your bio</div>
            </div>
          </div>
          <div
            className={`${this.stepCompleted("priorities")} ${this.stepActive(
              "priorities"
            )} step`}
          >
            <div className="content">
              <div className="title">Priorities</div>
              <div className="description">Select your priorities</div>
            </div>
          </div>
          <div
            className={`${this.stepCompleted("attributes")} ${this.stepActive(
              "attributes"
            )} step`}
          >
            <div className="content">
              <div className="title">Attributes</div>
              <div className="description">
                Distribute your attributes points
              </div>
            </div>
          </div>
          <div
            className={`${this.stepCompleted("skills")} ${this.stepActive(
              "skills"
            )} step`}
          >
            <div className="content">
              <div className="title">Skills</div>
              <div className="description">Learn Skills</div>
            </div>
          </div>
          <div
            className={`${this.stepCompleted("magic")} ${this.stepActive(
              "magic"
            )} step`}
          >
            <div className="content">
              <div className="title">Magic</div>
              <div className="description">Choose Spells</div>
            </div>
          </div>
          <div
            className={`${this.stepCompleted("qualities")} ${this.stepActive(
              "qualities"
            )} step`}
          >
            <div className="content">
              <div className="title">Qualities</div>
              <div className="description">Take Qualities</div>
            </div>
          </div>
        </div>
        {currentView}
      </div>
    );
  }
}
