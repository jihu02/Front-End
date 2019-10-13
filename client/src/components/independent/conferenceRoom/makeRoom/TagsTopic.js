import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styled from "styled-components";

const TAGDIV3 = styled.div`
  width: 347px;
  height: 28px;
  border-radius: 10px;
  font-size: 12px;
  border: solid 1px #cccccc;
  padding-left: 11px;
  outline: none;
  padding-top: 2px;
`;

export class TagsTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      topic: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  /* 태그 */
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(
      state => {
        return {
          tags: [...state.tags, tag],
          topic: this.state.topic.concat(tag.text)
        };
      },
      () => {
        console.log("tag: " + this.state.topic);
      }
    );

    this.props.callbackFromParent(this.state.topic);
    console.log(this.state.topic);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log("The tag at index " + index + " was clicked");
  }

  render() {
    const { tags } = this.state;
    return (
      <TAGDIV3>
        <ReactTags
          // inputFieldPosition="top"
          tags={tags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
          autofocus={false}
          placeholder="메인 토픽을 입력하세요"
        />
      </TAGDIV3>
    );
  }
}

export default TagsTopic;
