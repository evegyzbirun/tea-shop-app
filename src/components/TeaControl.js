import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import TeaDetail from './TeaDetail';


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      pounds: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null

      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />;
      buttonText = "Return to Tea List";
    }
    else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail
        tea={this.state.selectedTea}
        onClickingSell={this.handleSellingTea} />;
      buttonText = "Return to Tea List";
    }
    else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} onTeaSelection={this.handleChangingSelectedTea} />;

      buttonText = "Add Tea";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

  handleSellingTea = (teaToSell) => {
    const sellMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== this.state.selectedTea.id).concat(teaToSell)

    this.state.tea.pounds > 0 ?

      this.setState({
        mainTeaList: sellMainTeaList,
        pounds: this.state.tea.pounds - 1
      })
      :
      alert("Out of stock")
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: newMainTeaList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({ selectedTea: selectedTea });
  }

}

export default TeaControl;