import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { stateToMarkdown } from 'megadraft-js-export-markdown';
import{ editorStateToJSON } from 'megadraft';
import { convertFromRaw } from 'draft-js';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {
  CmsEditor,
  ToastMessage,
  CmsModal,
  LoadingIndicator,
  CmsEditorPreview,
} from 'components';

class CmsEditorContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseToast = this.handleCloseToast.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleChangeSelectedTags = this.handleChangeSelectedTags.bind(this);
    this.handleToggleSpotlight = this.handleToggleSpotlight.bind(this);
    this.handleSetStatus = this.handleSetStatus.bind(this);
    this.handleEditorSetContent = this.handleEditorSetContent.bind(this);
    this.handleEditorSetTitle = this.handleEditorSetTitle.bind(this);
    this.handleClosePreview = this.handleClosePreview.bind(this);
    this.handlePreviewArticle = this.handlePreviewArticle.bind(this);
    this.handleLoadingArticle = this.handleLoadingArticle.bind(this);
  }
  componentDidMount() {
    const {
      location,
      actions,
    } = this.props;
    const {
      articleId,
      action,
    } = location.query;
    if (articleId && action) {
      actions.cmsSetArticleId(articleId, action);
    }
  }
  componentWillReceiveProps({ message, articleId, article }) {
    if (message) {
      const {
        router,
      } = this.context;
      setTimeout(() => {
        const path = '/admin/content-dashboard';
        this.context.router.push(path);
        router.push(path);
      }, 3000);
    }
    if (articleId && !article) {
      this.handleLoadingArticle();
    }
    if (article && !this.props.article) {
      const {
        actions,
      } = this.props;
      actions.cmsSetStateFromArticle(article);
    }
  }
  handleLoadingArticle() {
    const {
      refetchArticle,
    } = this.props;
    if (typeof refetchArticle === 'function') {
      refetchArticle();
    }
  }
  handleSubmit() {
    const {
      editorTitle,
      editorState,
      modal,
      user,
    } = this.props;
    const {
      submitArticleRequest,
    } = this.props.actions;
    const rawState = editorStateToJSON(editorState);
    const blockArray = convertFromRaw(JSON.parse(rawState));
    const markdown = stateToMarkdown(blockArray);
    const input = {
      content: markdown,
      json: rawState,
      title: editorTitle,
      spotlighted: modal.spotlighted,
      status: modal.status,
      tags: modal.selectedTags.map((tag) => ({
        tag: tag.label,
      })),
      featuredImage: '',
      userId: user.id,
    };
    submitArticleRequest(input);
  }
  handleCloseToast({ type }) {
    const {
      handleClearingToast,
    } = this.props.actions;
    handleClearingToast(type);
  }
  handleOpenModal() {
    const {
      cmsOpenModal,
    } = this.props.actions;
    cmsOpenModal();
  }
  handleCloseModal() {
    const {
      cmsCloseModal,
    } = this.props.actions;
    cmsCloseModal();
  }
  handleSetStatus(status) {
    const {
      cmsSetStatus,
    } = this.props.actions;
    cmsSetStatus(status.value);
  }
  handleChangeSelectedTags(tags) {
    const {
      cmsSetSelectedTags,
    } = this.props.actions;
    cmsSetSelectedTags(tags);
  }
  handleToggleSpotlight() {
    const {
      cmsToggleSpotlight,
    } = this.props.actions;
    cmsToggleSpotlight();
  }
  handleEditorSetContent(state) {
    const {
      cmsSetEditorState,
    } = this.props.actions;
    cmsSetEditorState(state);
  }
  handleEditorSetTitle({ target }) {
    const {
      cmsSetEditorTitle,
    } = this.props.actions;
    cmsSetEditorTitle(target.value);
  }
  handlePreviewArticle() {
    const {
      editorState,
      editorTitle,
      actions,
    } = this.props;
    const rawState = editorStateToJSON(editorState);
    const blockArray = convertFromRaw(JSON.parse(rawState));
    const markdown = stateToMarkdown(blockArray);
    actions.cmsSetPreviewState({ markdown, title: editorTitle });
  }
  handleClosePreview() {
    const {
      cmsClosePreview,
    } = this.props.actions;
    cmsClosePreview();
  }
  render() {
    const {
      submissionError,
      message,
      modal,
      tags,
      loadingTags,
      articleLoading,
      editorState,
      editorTitle,
      isValid,
      preview,
    } = this.props;
    return (
      <div className={styles.cmsEditor}>
        {submissionError &&
          <ToastMessage
            message={submissionError.message}
            onClose={() => this.handleCloseToast({ type: 'error' })}
            status="critical"
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={() => this.handleCloseToast({ type: 'message' })}
          />
        }
        {loadingTags || articleLoading &&
          <LoadingIndicator isLoading />
        }
        <CmsEditor
          onSubmit={this.handleOpenModal}
          onChangeContent={this.handleEditorSetContent}
          onChangeTitle={this.handleEditorSetTitle}
          editorState={editorState}
          editorTitle={editorTitle}
          isValid={isValid}
          onTapToPreview={this.handlePreviewArticle}
        />
        <CmsModal
          isShowing={modal.isShowing}
          onClose={this.handleCloseModal}
          spotlighted={modal.spotlighted}
          onToggleSpotlight={this.handleToggleSpotlight}
          onSetStatus={this.handleSetStatus}
          status={modal.status}
          onSave={this.handleSubmit}
          canSubmit={isValid}
          tags={tags}
          selectedTags={modal.selectedTags}
          onChangeValue={this.handleChangeSelectedTags}
        />
        <CmsEditorPreview
          isShowing={preview.isPreviewing}
          onClose={this.handleClosePreview}
          content={preview.content}
          title={preview.title}
        />
      </div>
    );
  }
}

CmsEditorContainer.propTypes = {
  articleId: PropTypes.number,
  actions: PropTypes.object.isRequired,
  submissionError: PropTypes.object,
  message: PropTypes.string,
  modal: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  loadingTags: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  editorState: PropTypes.object,
  editorTitle: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  preview: PropTypes.object.isRequired,
  params: PropTypes.object,
  location: PropTypes.object.isRequired,
  article: PropTypes.object,
  articleLoading: PropTypes.bool.isRequired,
  refetchArticle: PropTypes.func.isRequired,
};

CmsEditorContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  submissionError: state.cmsEditorContainer.error,
  message: state.cmsEditorContainer.message,
  isSubmitting: state.cmsEditorContainer.isSubmitting,
  modal: state.cmsEditorContainer.modal,
  editorState: state.cmsEditorContainer.editorState,
  editorTitle: state.cmsEditorContainer.editorTitle,
  isValid: state.cmsEditorContainer.isValid,
  preview: state.cmsEditorContainer.preview,
  articleId: state.cmsEditorContainer.article.id,
  action: state.cmsEditorContainer.article.action,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CmsEditorActionCreators,
    dispatch
  ),
});

const Container = cssModules(CmsEditorContainer, styles);

const loadTagsQuery = gql`
  query loadPastTags {
    tags {
      id
      slug
      tag
    }
  }
`;

const ContainerWithTags = graphql(loadTagsQuery, {
  props: ({ data: { tags, loading } }) => ({
    loadingTags: loading,
    tags,
  }),
})(Container);

const loadArticleQuery = gql`
  query getArticle($id: ID) {
    article(id: $id) {
      title
      status
      content
      json
      spotlighted
      featured
      feature_image
      tags {
        id
        tag
      }
    }
  }
`;

const ContainerWithArticle = graphql(loadArticleQuery, {
  options: (ownProps) => ({
    skip: !ownProps.articleId,
    variables: {
      id: parseInt(ownProps.articleId, 10),
    },
  }),
  props: ({ data: { article, loading, refetch } }) => ({
    articleLoading: loading,
    article,
    refetchArticle: refetch,
  }),
})(ContainerWithTags);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithArticle);
