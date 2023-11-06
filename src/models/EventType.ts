type EventTypeProps = {
  isChecked?: boolean;
  xPath?: string;
  name?: string;
  type?: string;
  content?: string
  isEnter?: boolean
  value?: string
};

export default class EventType {
  content?: string;

  isChecked?: boolean;

  xPath?: string;

  name?: string;

  type?: string;

  value?: string;

  isEnter?: boolean;

  constructor(props: EventTypeProps) {
    this.isChecked = props.isChecked;
    this.xPath = props.xPath;
    this.name = props.name;
    this.type = props.type;
    this.content = props.content;
    this.isEnter = props.isEnter;
    this.value = props.value;
  }
}
