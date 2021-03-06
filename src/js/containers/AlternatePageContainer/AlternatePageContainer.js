import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PageMappings } from '../../constants/other-constants/PageMappings';
import { apiMappings } from '../../constants/other-constants/ApiMappings';
import { getData } from '../../data/dataFetcher';
import React, { Component } from 'react'; // eslint-disable-line import/first
import Radium, { StyleRoot } from 'radium'; // eslint-disable-line import/first
import * as ViewActions from '../../actions';
import PictureSelector from '../PictureSelector/PictureSelector';
import PageSwitcher from '../../components/PageSwitcher/PageSwitcher';
import PictureGridContainer from '../PictureGridContainer/PictureGridContainer';

@Radium // eslint-disable-line
class AlternatePageContainer extends Component {

  static fetchData() {
    return getData(apiMappings.OTHERPAGE_API);
  }

  render() {
    // eslint-disable-next-line react/jsx-filename-extension
    return (<StyleRoot>
      <div>
        <PageSwitcher linkAddress={''} />
        <div style={{ textAlign: 'center' }}>
          <PictureSelector
            items={this.props.otherpage.items}
            selectedPictureId={this.props.otherpage.selectedPictureId}
            actions={this.props.actions}
            pageId={PageMappings.OTHERPAGE}
            pictureMappings={this.props.otherpage.pictureMappings}
          />
          <PictureGridContainer
            items={this.props.otherpage.items}
            pictureList={this.props.otherpage.pictureList}
            pictureMappings={this.props.otherpage.pictureMappings}
            pageId={PageMappings.OTHERPAGE}
            onClick={this.props.actions.setPictureToDisplay}
          />
        </div>
      </div>
    </StyleRoot>
    );
  }
}

function
mapStateToProps(state) {
  return {
    otherpage: state[PageMappings.OTHERPAGE],
  };
}

function
mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ViewActions, dispatch),
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(AlternatePageContainer);
