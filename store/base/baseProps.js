import { InjectProps } from "../propsUtils";
import * as Operations from "./baseOperations";
import { Actions } from "./baseActions";

const mapStateToProps = state => {
  const {
    base: { modalInfo }
  } = state;

  return {
    modalInfo
  };
};

const mapDispatchToProps = dispatch => ({
  toggleModal: payload => dispatch(Actions.toggleModal(payload)),
  resetError: () => dispatch(Operations.resetError())
});
export const InjectBaseProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
