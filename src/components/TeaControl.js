import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import TeaDetail from './TeaDetail';
import EditTeaForm from './EditTeaFrom';


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false,
      pounds: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false



      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }



  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTeaForm tea={this.state.selectedTea} onEditTea={this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";

    }
    else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail
        tea={this.state.selectedTea}
        onClickingSell={this.handleSellingTea}
        onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Tea List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />;
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


  handleSellingTea = () => {

    // this.setState(state => {
    //   const soldMainTeaList = [...state.mainTeaList.filter(tea => tea.id !== this.state.selectedTea.id)];


    //   soldMainTeaList[teaToSell].pounds = soldMainTeaList[teaToSell].pounds - 1;
    //   return { mainTeaList: { tea: soldMainTeaList } };
    // });

    this.setState(state => {
      if (state.selectedTea.pounds === 0) {
        return { message: "Out of Stock" }
      }
      const updatedTea = { ...state.selectedTea, pounds: state.selectedTea.pounds - 65 };
      const soldMainTeaList = [...state.mainTeaList.filter(tea => tea.id !== this.state.selectedTea.id), updatedTea];
      return { mainTeaList: soldMainTeaList, selectedTea: updatedTea }
    });
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