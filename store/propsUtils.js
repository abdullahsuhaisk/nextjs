import { connect } from 'react-redux';

const NoProps = (state) => ({});
const NoActions = (dispatch) => ({});
const defaultSelectors = {
  selectProps: (props) => ({}),
  selectActions: (actions) => ({})
};

export function buildActionCreator(type) {
  return (payload = undefined) => ({ type, payload });
}

export const InjectProps = (
  { mapStateToProps = NoProps, mapDispatchToProps = NoActions },
  displayName = 'ImageService'
) => (selectors = defaultSelectors) => (Component) => {
  return setDisplayName(
    provideProps({ mapStateToProps, mapDispatchToProps })(Component, selectors),
    displayName
  );
};

function provideProps({
  mapStateToProps = NoProps,
  mapDispatchToProps = NoProps
}) {
  return (Component, selectors) => {
    if (selectors === defaultSelectors) {
      return connect(
        mapStateToProps,
        mapDispatchToProps
      )(Component);
    }
    const { selectProps, selectActions } = selectors;
    const propsSelector = selectProps || NoProps;
    const actionsSelector = selectActions || NoProps;
    return connect(
      (state) => propsSelector(mapStateToProps(state)),
      (dispatch) => actionsSelector(mapDispatchToProps(dispatch))
    )(Component);
  };
}

function setDisplayName(Component, displayName) {
  // Component.displayName = Component.displayName.replace(/Connect/, displayName);
  return Component;
}
