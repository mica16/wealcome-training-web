import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../../corelogic/usecases/actionCreators";
import {CoreLogicState} from "../../../corelogic/coreLogicState";

type Props = {
    apartments: string[];
    loading: boolean;
    retrieveApartments: typeof actionCreators.Actions.retrieveApartments
};
type State = {};

class App extends Component<Props, State> {

    componentDidMount() {
        this.props.retrieveApartments();
    }

    render() {
        return (
            <>
                <h1>ApartLand!</h1>
                {this.props.loading && <div>Chargement ...</div>}
                <div>{this.props.apartments}</div>
            </>
        )
    }

}

const mapStateToProps = (state: CoreLogicState) => ({
    apartments: state.apartments.data,
    loading: state.apartments.loading
});

const mapDispatchToProps = {
    retrieveApartments: actionCreators.Actions.retrieveApartments
};

export default connect(mapStateToProps, mapDispatchToProps)(App);