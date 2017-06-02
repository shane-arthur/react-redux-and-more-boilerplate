
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../data/dataFetcher';
import { PageMappings } from '../../constants/other-constants/PageMappings';
import { apiMappings } from '../../constants/other-constants/ApiMappings';
import React, { Component } from 'react'; // eslint-disable-line import/first
import Radium, { StyleRoot } from 'radium'; // eslint-disable-line import/first
import * as ViewActions from '../../actions';
import PictureSelector from '../PictureSelector/PictureSelector';
import PageSwitcher from '../../components/PageSwitcher/PageSwitcher';
import PictureGridContainer from '../PictureGridContainer/PictureGridContainer';

@Radium
class MainpageContainer extends Component {

  static fetchData() {
    return getData(apiMappings.MAINPAGE_API);
  }
  /* /*  <PageSwitcher linkAddress={PageMappings.OTHERPAGE} />
          <PictureSelector
            items={this.props.homepage.items}
            selectedPictureId={this.props.homepage.selectedPictureId}
            actions={this.props.actions}
            pageId={PageMappings.MAINPAGE}
            />*/
  render() {
    // eslint-disable-next-line react/jsx-filename-extension
    return (<StyleRoot>
      <div>
        <PictureGridContainer
          items={this.props.homepage.items}
          pictureList={this.props.homepage.pictureList}
          pictureMappings={this.props.homepage.pictureMappings}
          pageId={PageMappings.MAINPAGE}
          onClick = {this.props.actions.setPictureToDisplay}
          />
      </div>
    </StyleRoot>
    );
  }
}

function
mapStateToProps(state) {
  return {
    homepage: state[PageMappings.MAINPAGE]
  };
}

function
mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ViewActions, dispatch),
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(MainpageContainer);
